import { Image, ImageArray } from './../../classes/image';
import { HelperService } from './../helper.service';
import { Injectable } from '@angular/core';
import { DatabaseService } from './database.service';
import { formatDate } from '@angular/common';

@Injectable({
  providedIn: 'root'
})

  /**
   * Métodos para interação com a tabela image
   * @author Silvio Watakabe <silvio@tcmed.com.br>
   * @since 20-10-2020
   * @version 1.0
   */
export class EntImageService {
  // tslint:disable: variable-name
  // Busca um array da Classe e converte em Obj Json
  imageObj: ImageArray = new ImageArray();
  entyObj = this.imageObj.imageJson;
  // tslint:disable-next-line: no-inferrable-types
  tableName: string = 'image';

  constructor(
    private db: DatabaseService,
    private helper: HelperService
  ) {}

  /**
   * Recebe um objeto e executa insert ou Update
   * author Silvio Watakabe <silvio@tcmed.com.br>
   * @since 20-10-2020
   * @version 1.0
   * @param image Image
   */
  async save(image: Image) {
    const sql = 'SELECT * from ' + this.tableName + ' where id = ?';
    const data: any[] = [image.id];
    const result = await this.db.executeSQL(sql, data);
    const rows = result.rows;
    if (rows.length > 0) {
      return this.update(image);
    } else {
      return this.insert(image);
    }
  }

  /**
   * Faz o insert no BD
   * author Silvio Watakabe <silvio@tcmed.com.br>
   * @since 20-10-2020
   * @version 1.0
   * @param image Image
   */
  public insert(image: Image) {
    let sql = 'insert into '  + this.tableName + ' (';
    let values = '(';
    const data  = [];
    Object.keys(this.entyObj).forEach((key) => {
      data.push(image[key]);
      sql += key + ', ';
      values += '?,';
    });
    sql = this.helper.removeUltimosCaracteres(sql, 2);
    values = this.helper.removeUltimosCaracteres(values, 1);
    sql += ') values ' + values + ')';
    return this.db.executeSQL(sql, data);
  }

  /**
   * Update do registro no BD
   * author Silvio Watakabe <silvio@tcmed.com.br>
   * @since 20-10-2020
   * @version 1.0
   * @param image Image
   */
  public update(image: Image) {
    let sqlUp = 'update ' + this.tableName + ' set ';
    let id: number;
    const dataUp = [];
    Object.keys(this.entyObj).forEach((key) => {
        // Grava o ID para ser passado ao array fora do forEach
        if (key === 'id') {
          id = image[key];
        } else {
          dataUp.push(image[key]);
          sqlUp += key + ' = ?, ';
        }
    });
    dataUp.push(id);
    sqlUp = this.helper.removeUltimosCaracteres(sqlUp, 2);
    sqlUp += ' where id = ?';
    return this.db.executeSQL(sqlUp, dataUp);
  }

  /**
   * Exclui um registro
   * author Silvio Watakabe <silvio@tcmed.com.br>
   * @since 20-10-2020
   * @version 1.0
   * @param id number
   */
  public delete(id: number) {
    const sql = 'delete from ' + this.tableName + ' where id = ?';
    const data = [id];

    return this.db.executeSQL(sql, data);
  }

  /**
   * Exclui todos os images dentro de um array
   * author Silvio Watakabe <silvio@tcmed.com.br>
   * @since 20-10-2020
   * @version 1.0
   * @param images: Image[]
   */
  async deletaImages(images: Image[]) {
    images.forEach( async (item: Image) => {
      this.delete(item.id);
    });
  }

  /**
   * Carrega um registro conforme ID
   * author Silvio Watakabe <silvio@tcmed.com.br>
   * @since 20-10-2020
   * @version 1.0
   * @param id number
   */
  async getItem(id: number) {
    const sql = 'SELECT * FROM ' + this.tableName + ' where id = ?';
    const data = [id];
    const result = await this.db.executeSQL(sql, data);
    const rows = result.rows;
    const image = new Image();
    if (rows && rows.length > 0) {
      const item = rows.item(0);
      Object.keys(this.entyObj).forEach((key) => {
        image[key] = item[key];
      });
    }

    return image;
  }

  /**
   * Carrega um registro conforme Data
   * author Silvio Watakabe <silvio@tcmed.com.br>
   * @since 20-10-2020
   * @version 1.0
   * @param date Date
   */
  async getItemByDate(date: Date, id_medico: number, sistema: number) {
    const dateFormat = formatDate(date, 'yyyy-MM-dd', 'en-US');
    const sql = 'SELECT * FROM ' + this.tableName + ' where agendado_em = ? and medico_id = ? and hold = ?';
    const data = [dateFormat, id_medico, sistema];
    const result = await this.db.executeSQL(sql, data);
    const rows = result.rows;
    const image = new Image();
    if (rows && rows.length > 0) {
      const item = rows.item(0);
      Object.keys(this.entyObj).forEach((key) => {
        image[key] = item[key];
      });
    }
    return image;
  }

  /**
   * Carrega um registro conforme Data
   * author Silvio Watakabe <silvio@tcmed.com.br>
   * @since 20-10-2020
   * @version 1.0
   * @param date Date
   */
  async getItemByMedico(id_medico: number, sistema: number) {
    const  sql = 'SELECT * FROM ' + this.tableName + ' where medico_id = ? and hold = ?';
    const  data = [id_medico, sistema];
    const  result = await this.db.executeSQL(sql, data);
    const  images = this.fillImages(result.rows);
    return images;
  }

  /**
   * Carrega todos os registros
   * author Silvio Watakabe <silvio@tcmed.com.br>
   * @since 20-10-2020
   * @version 1.0
   */
  async getAll() {
    const sql = 'SELECT * FROM ' + this.tableName ;
    const  result = await this.db.executeSQL(sql);
    const  images = this.fillImages(result.rows);

    return images;
  }

  /**
   * Carrega todos os registros
   * author Silvio Watakabe <silvio@tcmed.com.br>
   * @since 25-08-2020
   * @version 1.0
   * @param periodo number padrão 45 dias
   */
  async getByPeriod(periodo: number = 45) {
    // busca agendados_em com a data atual - 45 dias para exclusão
    const sql = 'SELECT * FROM ' + this.tableName +
    ' WHERE agendado_em < date("now","-' + periodo + ' days")' ;

    const  result = await this.db.executeSQL(sql);
    const  images = this.fillImages(result.rows);

    return images;
  }

  /**
   * Carrega um array com todos os campos necessários
   * author Silvio Watakabe <silvio@tcmed.com.br>
   * @since 20-10-2020
   * @version 1.0
   * @param rows any
   */
  private fillImages(rows: any) {
    const images: Image[] = [];
    for (let i = 0; i < rows.length; i++) {
      const item = rows.item(i);
      const image = new Image();
      Object.keys(this.entyObj).forEach((key) => {
        image[key] = item[key];
      });
      images.push(image);
    }

    return images;
  }

}

