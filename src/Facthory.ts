abstract class Equipos{
    constructor(public nombre: string, public ram: string, public procesador: string){}

    abstract detalles(): string;
}

class Notebook extends Equipos{
    detalles(): string {
        return `Notebook: ${this.nombre}, RAM: ${this.ram}, Procesador: ${this.procesador}`;
    }
}

class Desktop extends Equipos{
    detalles(): string{
        return `Desktop: ${this.nombre}, RAM: ${this.ram}, Procesador: ${this.procesador}`;
    }
}

class Servidor extends Equipos{
    detalles(): string{
        return `Servidor: ${this.nombre}, RAM: ${this.ram}, Procesador: ${this.procesador}`;
    }
}

class EquipoFactory {
    crearEquipo(tipo: string, nombre: string, ram: string, procesador: string): Equipos {
        switch(tipo.toLowerCase()){
            case 'notebook':
                return new Notebook(nombre, ram, procesador);
            case 'desktop':
                return new Desktop(nombre, ram, procesador);
            case 'servidor':
                return new Servidor(nombre, ram, procesador);
            default:
                throw new Error('Tipo de equipo no válido');
        }
    }
}

const factory = new EquipoFactory();
const notebook = factory.crearEquipo("Notebook", "Dell XPS", "16GB", "i7");
console.log(notebook.detalles());
