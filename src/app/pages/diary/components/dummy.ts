
import { Menu } from "./main-diary"

export const dummyMenus: Menu[] = [
  {
    id: 1,
    jenisMenu: "Breakfast",
    userId: 101,
    hari: new Date(),
    Foods: [
      {
        id: 1,
        foodName: "Oatmeal",
        foodId: 201,
        kalori: 150,
        menuId: 1,
        takaran: 1,
        originalServing: "100 gr"
      },
      {
        id: 2,
        foodName: "Banana",
        foodId: 202,
        kalori: 90,
        menuId: 1,
        takaran: 1,
        originalServing: "1 medium banana"
      },
      {
        id: 3,
        foodName: "Boiled Egg",
        foodId: 203,
        kalori: 90,
        menuId: 1,
        takaran: 1,
        originalServing: "1 whole egg"
      }
    ]
  },
  {
    id: 2,
    jenisMenu: "Lunch",
    userId: 101,
    hari: new Date(),
    Foods: [
      {
        id: 4,
        foodName: "Grilled Chicken",
        foodId: 204,
        kalori: 250,
        menuId: 2,
        takaran: 1,
        originalServing: "120 gr"
      },
      {
        id: 5,
        foodName: "Steamed Rice",
        foodId: 205,
        kalori: 200,
        menuId: 2,
        takaran: 1,
        originalServing: "150 gr"
      },
      {
        id: 6,
        foodName: "Sautéed Vegetables",
        foodId: 206,
        kalori: 100,
        menuId: 2,
        takaran: 1,
        originalServing: "100 gr"
      }
    ]
  },
  {
    id: 3,
    jenisMenu: "Dinner",
    userId: 101,
    hari: new Date(),
    Foods: [
      {
        id: 7,
        foodName: "Salmon",
        foodId: 207,
        kalori: 300,
        menuId: 3,
        takaran: 1,
        originalServing: "150 gr"
      },
      {
        id: 8,
        foodName: "Quinoa",
        foodId: 208,
        kalori: 180,
        menuId: 3,
        takaran: 1,
        originalServing: "100 gr"
      },
      {
        id: 9,
        foodName: "Green Salad",
        foodId: 209,
        kalori: 70,
        menuId: 3,
        takaran: 1,
        originalServing: "1 cup"
      }
    ]
  }
];

