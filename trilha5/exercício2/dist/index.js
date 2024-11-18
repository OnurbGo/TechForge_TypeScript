abstract class Inventory {
    protected inventory: Record<string, number> = {};
    
    abstract addItem(item: string, quantity: number): void;

    abstract removeItem(item: string): void;

    getInventory(): Record<string, number> {
      return this.inventory;
    }
  }

  class WarehouseInventory extends Inventory {
    addItem(item: string, quantity: number): void {
      if (this.inventory[item]) {
        this.inventory[item] += quantity;
      } else {
        this.inventory[item] = quantity;
      }
      console.log(`Adicionado ${quantity} unidades de ${item} ao estoque do armazém.`);
    }

    removeItem(item: string): void {
      if (this.inventory[item]) {
        delete this.inventory[item];
        console.log(`Item ${item} removido do estoque do armazém.`);
      } else {
        console.log(`Item ${item} não encontrado no estoque do armazém.`);
      }
    }
  }
  
  class StoreInventory extends Inventory {
    addItem(item: string, quantity: number): void {
      if (this.inventory[item]) {
        const newQuantity = this.inventory[item] + quantity;
        if (newQuantity <= 10) {
          this.inventory[item] = newQuantity;
          console.log(`Adicionado ${quantity} unidades de ${item} ao estoque da loja.`);
        } else {
          console.log(`Não é possível adicionar ${quantity} unidades de ${item}. O limite é 10.`);
        }
      } else {
        if (quantity <= 10) {
          this.inventory[item] = quantity;
          console.log(`Adicionado ${quantity} unidades de ${item} ao estoque da loja.`);
        } else {
          console.log(`Não é possível adicionar ${quantity} unidades de ${item}. O limite é 10.`);
        }
      }
    }
    removeItem(item: string): void {
      if (this.inventory[item]) {
        delete this.inventory[item];
        console.log(`Item ${item} removido do estoque da loja.`);
      } else {
        console.log(`Item ${item} não encontrado no estoque da loja.`);
      }
    }
  }
  
  const warehouse = new WarehouseInventory();
  const store = new StoreInventory();

  warehouse.addItem("Cadeiras", 50);
  warehouse.addItem("Mesas", 30);
  console.log("Inventário do Armazém:", warehouse.getInventory());
 
  store.addItem("Cadeiras", 5);
  store.addItem("Mesas", 3);
  store.addItem("Cadeiras", 6);
  console.log("Inventário da Loja:", store.getInventory());
 
  store.removeItem("Cadeiras");
  console.log("Inventário da Loja após remoção:", store.getInventory());
  