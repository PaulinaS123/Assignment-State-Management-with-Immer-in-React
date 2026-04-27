import { useImmer } from "use-immer";
import { useState } from "react";

export default function ShoppingListWithImmer() {
  const [shoppingList, updateShoppingList] = useImmer([]);
  const [inputName, setInputName] = useState("");

  // Add item
  const addItem = () => {
    if (!inputName.trim()) return;

    updateShoppingList((draft) => {
      draft.push({
        id: Date.now(),
        name: inputName,
        quantity: 1,
        details: {
          category: "General",
          notes: "",
        },
      });
    });

    setInputName("");
  };

  // Update item (toggle note example)
  const updateItem = (id) => {
    updateShoppingList((draft) => {
      const item = draft.find((i) => i.id === id);
      if (item) {
        item.details.notes = item.details.notes ? "" : "Important item!";
      }
    });
  };

  // Remove item
  const removeItem = (id) => {
    updateShoppingList((draft) => {
      const index = draft.findIndex((i) => i.id === id);
      if (index !== -1) {
        draft.splice(index, 1);
      }
    });
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Shopping List (Immer)</h2>

      <input
        type="text"
        placeholder="Enter item"
        value={inputName}
        onChange={(e) => setInputName(e.target.value)}
      />

      <button onClick={addItem}>Add Item</button>

      <ul>
        {shoppingList.map((item) => (
          <li key={item.id} style={{ marginTop: "10px" }}>
            <strong>{item.name}</strong> (Qty: {item.quantity})
            <br />
            Notes: {item.details.notes || "None"}
            <div>
              <button onClick={() => updateItem(item.id)}>Toggle Note</button>

              <button onClick={() => removeItem(item.id)}>Remove</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
