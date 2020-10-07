export interface usuario{
    id ?:number;
    nombre:string;
    apellidoP:string;
    apellidoM:string;
    genero:string;
    fecha:Date | null;
    correo:string;
    username:string;
    password:string;
    region:string;
    comuna:string;
    admin ?:boolean;
    estado ?:boolean;
}