export class Mascara {
    // tslint:disable: variable-name
    id: number;
    real: number;
    percent: number;
    data: Date;
    sqliteDate: any;
    fixo: number;
    celular: number;
}

export class MascaraArray {
    mascaraJson: Mascara = {
        id: null,
        real: null,
        percent: null,
        data: null,
        sqliteDate: null,
        fixo: null,
        celular: null
    };
}


