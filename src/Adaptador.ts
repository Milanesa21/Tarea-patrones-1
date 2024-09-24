// Interfaz del sistema antiguo
interface ItemViejo {
    nombre: string;
    categoria: string;
    condicion: string;
}

// Clase antigua de inventario
class InventarioViejo {
    private items: ItemViejo[] = [];

    agregarItem(nombre: string, categoria: string, condicion: string): void {
        this.items.push({ nombre, categoria, condicion });
    }

    obtenerItems(): ItemViejo[] {
        return this.items;
    }
}

// Interfaz del nuevo sistema
interface EquipoNuevo {
    nombre: string;
    tipo: string;
    estado: string;
}

// Nueva interfaz de Inventario
interface IInventarioNuevo {
    agregarEquipo(nombre: string, tipo: string, estado: string): void;
    listarEquipos(): EquipoNuevo[];
}

// Adaptador
class AdaptadorInventario implements IInventarioNuevo {
    constructor(private inventarioViejo: InventarioViejo) {}

    agregarEquipo(nombre: string, tipo: string, estado: string): void {
        this.inventarioViejo.agregarItem(nombre, tipo, estado);
    }

    listarEquipos(): EquipoNuevo[] {
        return this.inventarioViejo.obtenerItems().map(item => ({
            nombre: item.nombre,
            tipo: item.categoria,
            estado: item.condicion
        }));
    }
}

// Ejemplo de uso
const inventarioViejo = new InventarioViejo();
const adaptador = new AdaptadorInventario(inventarioViejo);

adaptador.agregarEquipo("Servidor Dell", "Servidor", "disponible");
console.log(adaptador.listarEquipos());


// Ejemplo adicional
adaptador.agregarEquipo("Notebook HP", "Portátil", "en reparación");
console.log(adaptador.listarEquipos());
