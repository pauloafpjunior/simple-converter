export class Conversor {
    static pes2metros(valor: number, inverter: boolean) {
        if (!inverter) {
            return valor * 0.3048;
        } 
        return valor / 0.3048;        
    }

    static celsius2far(valor: number, inverter: boolean) {
        if (!inverter) {
            return (valor * 1.8) + 32;
        } 
        return (valor -32) * 0.5555;
    }
}