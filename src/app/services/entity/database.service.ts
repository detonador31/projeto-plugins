import { Injectable } from '@angular/core';
import { SQLite, SQLiteObject } from '@ionic-native/sqlite/ngx';
import { SQLitePorter } from '@ionic-native/sqlite-porter/ngx';

@Injectable({
  providedIn: 'root'
})
export class DatabaseService {

  // Declara um objeto SQLite;
  db: SQLiteObject;
  // Nome do banco de dados
  // tslint:disable-next-line: no-inferrable-types
  databaseName: string = 'plugin_teste.db';

  constructor(
    // Dependências para o SQLite
    private sqlite: SQLite,
    private sqlitePorter: SQLitePorter,
  ) { }

  // Abre ou cria o Banco de dados
  async openDatabase() {
    try {
      this.db = await this.sqlite.create({ name: this.databaseName, location: 'default'});
      await this.createDatabase();
    } catch (error) {
      console.error('Erro na tentativa de criar um banco de dados', error);
    }
  }

  // Será criado o banco de dados caso não exista
  async createDatabase() {
    const sqlCreateDatabase = this.getCreateTable();
    const result = await this.sqlitePorter.importSqlToDb(this.db, sqlCreateDatabase);
    return result ? true : false;
  }

  // Retorna o comando para ser usado no método createDatabase
  getCreateTable() {
    const sqls = [];
  // Comando para remover tabela

  /*     sqls.push('DROP TABLE consulta_anterior;');
    sqls.push('DROP TABLE consulta_enviar;'); */
    // sqls.push('DROP TABLE image;');

    // Tabela de bloco
    sqls.push('CREATE TABLE IF NOT EXISTS image (' +
      'id integer primary key AUTOINCREMENT NOT NULL,' +
      'image BLOB,' +
      'created_at Date);'
    );

    // Tabela de bloco
/*     sqls.push('CREATE TABLE IF NOT EXISTS bloco (' +
      'id integer primary key AUTOINCREMENT NOT NULL,' +
      'referencia VARCHAR (15),' +
      'medico_id integer, ' +
      'qtd_empresa integer, ' +
      'agendado_em Date, ' +
      'created_at Date, ' +
      'hold integer, ' +
      'created_by_nome VARCHAR (60));'); */

    return sqls.join('\n');
  }

  // Executa comandos SQLite enviados na string sql e com os parâmetros em array
  executeSQL(sql: string, params?: any[]) {
    return this.db.executeSql(sql, params);
  }

}
