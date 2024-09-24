interface Observador {
    actualizar(equipo: Equipo): void;
}

class Soporte implements Observador {
    actualizar(equipo: Equipo): void {
        console.log(`Soporte notificado: ${equipo.nombre} ha cambiado su estado a ${equipo.estado}.`);
    }
}

class Equiposs {
    private observadores: Observador[] = [];

    constructor(public nombre: string, public tipo: string, public estado: string) {}

    agregarObservador(observador: Observador): void {
        this.observadores.push(observador);
    }

    eliminarObservador(observador: Observador): void {
        const index = this.observadores.indexOf(observador);
        if (index > -1) {
            this.observadores.splice(index, 1);
        }
    }

    private notificarObservadores(): void {
        for (let observador of this.observadores) {
            observador.actualizar(this);
        }
    }

    cambiarEstado(nuevoEstado: string): void {
        this.estado = nuevoEstado;
        this.notificarObservadores();
    }
}

// Ejemplo de uso
const soporte = new Soporte();
const equipo = new Equiposs("Notebook HP", "Portátil", "disponible");
equipo.agregarObservador(soporte);
equipo.cambiarEstado("en reparación");

// Ejemplo adicional con múltiples observadores
class DepartamentoTI implements Observador {
    actualizar(equipo: Equipo): void {
        console.log(`Departamento TI notificado: ${equipo.nombre} ahora está ${equipo.estado}.`);
    }
}

const departamentoTI = new DepartamentoTI();
equipo.agregarObservador(departamentoTI);
equipo.cambiarEstado("en mantenimiento");