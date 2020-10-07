export interface foro{
    idForo ?: number;
    idCategoria: number;
    idTemas: number;
    userCreador: string;
    fechaForo: Date;
    contenido: string;
    titulo: string;
    descripcion: string;
}