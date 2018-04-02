export default class InventoryError extends Error {
  constructor(...args) {
    super(...args);
    Error.captureStackTrace(this, InventoryError);
    this.userMessage = "Ekwipunek jest pełny";
  }
}
