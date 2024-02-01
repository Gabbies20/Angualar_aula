export class Empleado{
    /**
     * Es una clase que voy a usar en mi componente.
     * 
     * Eñlarchivo de componenete es el que vincula con todo.
     * 
     * EL controlador es component.ts .
     */

    constructor(
        public nombre:string,
        public edad:number,
        public cargo:string,
        public contratado:boolean
    ){}
}