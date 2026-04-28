import React, { useState, useEffect } from "react";
import {
  Check,
  Plus,
  Trash2,
  Edit2,
  Save,
  X,
  ChevronUp,
  ChevronDown,
  ChevronRight,
  GripVertical,
} from "lucide-react";

export default function MirissaTripPlanner() {
  // ==================== STATE ====================
  const [people, setPeople] = useState([
    { id: 1, name: "Rashi", budget: 30060, surfing: true },
    { id: 2, name: "Bima", budget: 30060, surfing: true },
    { id: 3, name: "Setha", budget: 30060, surfing: true },
    { id: 4, name: "Shena", budget: 26060, surfing: false },
  ]);

  const [expenses, setExpenses] = useState([
    {
      id: 1,
      date: "2026-02-25",
      description: "ARA Beach Resort - Advance",
      person: "Rashi",
      amount: 3500,
    },
    {
      id: 2,
      date: "2026-02-25",
      description: "ARA Beach Resort - Advance",
      person: "Bima",
      amount: 3500,
    },
    {
      id: 3,
      date: "2026-02-25",
      description: "ARA Beach Resort - Advance",
      person: "Setha",
      amount: 3500,
    },
    {
      id: 4,
      date: "2026-02-25",
      description: "ARA Beach Resort - Advance",
      person: "Shena",
      amount: 3500,
    },
  ]);

  const [shoppingList, setShoppingList] = useState([
    { id: 1, item: "💧 Water", quantity: 4, price: 130, bought: false },
    { id: 2, item: "🥨 Murukku/Chips", quantity: 4, price: 300, bought: false },
    { id: 3, item: "🍬 Pebbles", quantity: 1, price: 420, bought: false },
    { id: 4, item: "🥤 Sprite", quantity: 1, price: 420, bought: false },
    { id: 5, item: "🍹 Sun Crush", quantity: 4, price: 180, bought: false },
  ]);

  const [packingList, setPackingList] = useState([
    { id: 1, item: "🎴 Card Pack", category: "Games", packed: false },
    { id: 2, item: "🎯 Uno Pack", category: "Games", packed: false },
    { id: 3, item: "🏖️ Beach Mat", category: "Essentials", packed: false },
    { id: 4, item: "🧼 Soap", category: "Essentials", packed: false },
    { id: 5, item: "🧴 Shampoo", category: "Essentials", packed: false },
    { id: 6, item: "🎁 Gifts", category: "Essentials", packed: false },
    { id: 7, item: "🕶️ Sunglasses", category: "Essentials", packed: false },
    { id: 8, item: "🧴 Sunscreen", category: "Essentials", packed: false },
    { id: 9, item: "📱 Phone Charger", category: "Essentials", packed: false },
    { id: 10, item: "🪥 Tooth Brush", category: "Essentials", packed: false },
    {
      id: 11,
      item: "🚌 Day 01 – Travel Outfit",
      category: "Outfits",
      packed: false,
    },
    {
      id: 12,
      item: "🏨 Day 01 – Hotel Outfit",
      category: "Outfits",
      packed: false,
    },
    {
      id: 13,
      item: "🌙 Day 01 – Night Outfit",
      category: "Outfits",
      packed: false,
    },
    { id: 14, item: "💤 Day 01 – Pyjama", category: "Outfits", packed: false },
    {
      id: 15,
      item: "🏖️ Day 02 – Beach Wear",
      category: "Outfits",
      packed: false,
    },
    {
      id: 16,
      item: "🍽️ Day 02 – Lunch Outfit",
      category: "Outfits",
      packed: false,
    },
    {
      id: 17,
      item: "🚌 Day 03 – Return Outfit",
      category: "Outfits",
      packed: false,
    },
  ]);

  const [activities, setActivities] = useState([
    {
      day: 1,
      date: "2026-05-01",
      label: "May 1, 2026 (Friday)",
      items: [
        {
          id: 1,
          time: "10:15 AM",
          name: "🚌 Departure",
          location: "Makumbura → Matara",
          cost: 3880,
          done: false,
        },
        {
          id: 2,
          time: "12:15 PM",
          name: "🍽️ Lunch @ P&S",
          location: "Matara Bus Stand",
          cost: 4000,
          done: false,
        },
        {
          id: 3,
          time: "2:00 PM",
          name: "🛒 Shopping at Cargills",
          location: "Get snacks & drinks",
          cost: 3280,
          done: false,
        },
        {
          id: 4,
          time: "2:00 PM",
          name: "🏨 Check-in",
          location: "ARA Beach Resort",
          cost: 400,
          done: false,
        },
        {
          id: 5,
          time: "7:30 PM",
          name: "🌙 Dinner",
          location: "Low budget place",
          cost: 4000,
          done: false,
        },
        {
          id: 6,
          time: "9:00 PM",
          name: "🚗 Back to Resort",
          location: "Transport",
          cost: 400,
          done: false,
        },
      ],
    },
    {
      day: 2,
      date: "2026-05-02",
      label: "May 2, 2026 (Saturday)",
      items: [
        {
          id: 7,
          time: "9:00 AM",
          name: "🚗 ARA to Surf Spot",
          location: "Transport",
          cost: 200,
          done: false,
        },
        {
          id: 8,
          time: "10:00 AM",
          name: "🏄 Surfing Session",
          location: "Mirissa Beach (3 people)",
          cost: 12000,
          done: false,
        },
        {
          id: 9,
          time: "1:00 PM",
          name: "🍕 Picnic Lunch - Pizza",
          location: "Beach",
          cost: 4000,
          done: false,
        },
        {
          id: 10,
          time: "2:00 PM",
          name: "🚗 Surf to ARA",
          location: "Transport",
          cost: 200,
          done: false,
        },
        {
          id: 11,
          time: "5:00 PM",
          name: "🚗 ARA to Petti Petti",
          location: "Transport",
          cost: 200,
          done: false,
        },
        {
          id: 12,
          time: "5:30 PM",
          name: "🎉 Petti Petti Activity",
          location: "Evening fun!",
          cost: 20000,
          done: false,
        },
        {
          id: 13,
          time: "8:00 PM",
          name: "🚗 Petti Petti to ARA",
          location: "Transport",
          cost: 200,
          done: false,
        },
      ],
    },
    {
      day: 3,
      date: "2026-05-03",
      label: "May 3, 2026 (Sunday)",
      items: [
        {
          id: 14,
          time: "11:00 AM",
          name: "🏨 Check-out",
          location: "ARA Beach Resort",
          cost: 0,
          done: false,
        },
        {
          id: 15,
          time: "11:30 AM",
          name: "🚗 ARA to Matara",
          location: "Transport",
          cost: 400,
          done: false,
        },
        {
          id: 16,
          time: "1:15 PM",
          name: "☕ Barista Coffee Stop",
          location: "Matara",
          cost: 3200,
          done: false,
        },
        {
          id: 17,
          time: "3:45 PM",
          name: "🚌 Journey Home",
          location: "Matara → Makumbura",
          cost: 3880,
          done: false,
        },
      ],
    },
  ]);

  const [activeTab, setActiveTab] = useState("itinerary");
  const [editingShop, setEditingShop] = useState(null);
  const [editingExpense, setEditingExpense] = useState(null);
  const [editingActivity, setEditingActivity] = useState(null);
  const [draggedItem, setDraggedItem] = useState(null);
  const [draggedOver, setDraggedOver] = useState(null);

  const [collapsedCategories, setCollapsedCategories] = useState({
    Essentials: false,
    Outfits: false,
    Games: false,
  });

  const [newShoppingItem, setNewShoppingItem] = useState({
    item: "",
    quantity: 1,
    price: 0,
  });
  const [newPackingItem, setNewPackingItem] = useState({
    item: "",
    category: "Essentials",
  });
  const [newExpense, setNewExpense] = useState({
    date: "",
    description: "",
    person: "Rashi",
    amount: 0,
  });
  const [newActivity, setNewActivity] = useState({
    day: 1,
    time: "",
    name: "",
    location: "",
    cost: 0,
  });

  // ==================== PERSISTENCE ====================
  useEffect(() => {
    const saved = localStorage.getItem("mirissa-trip-data");
    if (saved) {
      try {
        const data = JSON.parse(saved);
        if (data.people) setPeople(data.people);
        if (data.expenses) setExpenses(data.expenses);
        if (data.shopping) setShoppingList(data.shopping);
        if (data.packing) setPackingList(data.packing);
        if (data.activities) setActivities(data.activities);
      } catch (e) {
        console.error("Failed to load saved data");
      }
    }
  }, []);

  useEffect(() => {
    const data = {
      people,
      expenses,
      shopping: shoppingList,
      packing: packingList,
      activities,
    };
    localStorage.setItem("mirissa-trip-data", JSON.stringify(data));
  }, [people, expenses, shoppingList, packingList, activities]);

  // ==================== DRAG AND DROP ====================
  const handleDragStart = (e, item, type) => {
    setDraggedItem({ item, type });
    e.currentTarget.style.opacity = "0.5";
  };

  const handleDragEnd = (e) => {
    e.currentTarget.style.opacity = "1";
    setDraggedItem(null);
    setDraggedOver(null);
  };

  const handleDragOver = (e, itemId) => {
    e.preventDefault();
    setDraggedOver(itemId);
  };

  const handleDrop = (e, targetItem, type, dayIndex = null) => {
    e.preventDefault();

    if (!draggedItem || draggedItem.type !== type) return;

    if (type === "activity" && dayIndex !== null) {
      setActivities((prev) =>
        prev.map((day, idx) => {
          if (idx !== dayIndex) return day;

          const items = [...day.items];
          const draggedIndex = items.findIndex(
            (i) => i.id === draggedItem.item.id
          );
          const targetIndex = items.findIndex((i) => i.id === targetItem.id);

          if (draggedIndex === -1 || targetIndex === -1) return day;

          const [removed] = items.splice(draggedIndex, 1);
          items.splice(targetIndex, 0, removed);

          return { ...day, items };
        })
      );
    } else if (type === "shopping") {
      setShoppingList((prev) => {
        const items = [...prev];
        const draggedIndex = items.findIndex(
          (i) => i.id === draggedItem.item.id
        );
        const targetIndex = items.findIndex((i) => i.id === targetItem.id);

        if (draggedIndex === -1 || targetIndex === -1) return prev;

        const [removed] = items.splice(draggedIndex, 1);
        items.splice(targetIndex, 0, removed);

        return items;
      });
    } else if (type === "packing") {
      setPackingList((prev) => {
        const items = [...prev];
        const draggedIndex = items.findIndex(
          (i) => i.id === draggedItem.item.id
        );
        const targetIndex = items.findIndex((i) => i.id === targetItem.id);

        if (draggedIndex === -1 || targetIndex === -1) return prev;

        const [removed] = items.splice(draggedIndex, 1);
        items.splice(targetIndex, 0, removed);

        return items;
      });
    }

    setDraggedItem(null);
    setDraggedOver(null);
  };

  // ==================== ACTIVITY FUNCTIONS ====================
  const toggleActivity = (dayIndex, activityId) => {
    setActivities((prev) =>
      prev.map((day, idx) =>
        idx === dayIndex
          ? {
              ...day,
              items: day.items.map((item) =>
                item.id === activityId ? { ...item, done: !item.done } : item
              ),
            }
          : day
      )
    );
  };

  const addActivity = () => {
    if (!newActivity.name.trim()) return;

    const dayIndex = newActivity.day - 1;
    setActivities((prev) =>
      prev.map((day, idx) =>
        idx === dayIndex
          ? {
              ...day,
              items: [
                ...day.items,
                { id: Date.now(), ...newActivity, done: false },
              ],
            }
          : day
      )
    );
    setNewActivity({ day: 1, time: "", name: "", location: "", cost: 0 });
  };

  const updateActivity = (dayIndex, activityId, field, value) => {
    setActivities((prev) =>
      prev.map((day, idx) =>
        idx === dayIndex
          ? {
              ...day,
              items: day.items.map((item) =>
                item.id === activityId ? { ...item, [field]: value } : item
              ),
            }
          : day
      )
    );
  };

  const deleteActivity = (dayIndex, activityId) => {
    setActivities((prev) =>
      prev.map((day, idx) =>
        idx === dayIndex
          ? {
              ...day,
              items: day.items.filter((item) => item.id !== activityId),
            }
          : day
      )
    );
  };

  const moveActivity = (dayIndex, activityIndex, direction) => {
    setActivities((prev) =>
      prev.map((day, idx) => {
        if (idx !== dayIndex) return day;

        const newIndex = activityIndex + direction;
        if (newIndex < 0 || newIndex >= day.items.length) return day;

        const items = [...day.items];
        [items[activityIndex], items[newIndex]] = [
          items[newIndex],
          items[activityIndex],
        ];

        return { ...day, items };
      })
    );
  };

  // ==================== SHOPPING FUNCTIONS ====================
  const toggleShoppingItem = (id) => {
    setShoppingList((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, bought: !item.bought } : item
      )
    );
  };

  const addShoppingItem = () => {
    if (!newShoppingItem.item.trim()) return;
    setShoppingList((prev) => [
      ...prev,
      { id: Date.now(), ...newShoppingItem, bought: false },
    ]);
    setNewShoppingItem({ item: "", quantity: 1, price: 0 });
  };

  const updateShoppingItem = (id, field, value) => {
    setShoppingList((prev) =>
      prev.map((item) => (item.id === id ? { ...item, [field]: value } : item))
    );
  };

  const deleteShoppingItem = (id) => {
    setShoppingList((prev) => prev.filter((item) => item.id !== id));
  };

  const moveShoppingItem = (index, direction) => {
    setShoppingList((prev) => {
      const newIndex = index + direction;
      if (newIndex < 0 || newIndex >= prev.length) return prev;

      const items = [...prev];
      [items[index], items[newIndex]] = [items[newIndex], items[index]];

      return items;
    });
  };

  // ==================== PACKING FUNCTIONS ====================
  const togglePackingItem = (id) => {
    setPackingList((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  };

  const addPackingItem = () => {
    if (!newPackingItem.item.trim()) return;
    setPackingList((prev) => [
      ...prev,
      { id: Date.now(), ...newPackingItem, packed: false },
    ]);
    setNewPackingItem({ item: "", category: "Essentials" });
  };

  const deletePackingItem = (id) => {
    setPackingList((prev) => prev.filter((item) => item.id !== id));
  };

  const toggleCategory = (category) => {
    setCollapsedCategories((prev) => ({
      ...prev,
      [category]: !prev[category],
    }));
  };

  // Group packing items by category
  const groupedPacking = packingList.reduce((acc, item) => {
    if (!acc[item.category]) acc[item.category] = [];
    acc[item.category].push(item);
    return acc;
  }, {});

  // ==================== EXPENSE FUNCTIONS ====================
  const addExpense = () => {
    if (!newExpense.description.trim() || newExpense.amount <= 0) return;
    setExpenses((prev) => [...prev, { id: Date.now(), ...newExpense }]);
    setNewExpense({ date: "", description: "", person: "Rashi", amount: 0 });
  };

  const updateExpense = (id, field, value) => {
    setExpenses((prev) =>
      prev.map((exp) => (exp.id === id ? { ...exp, [field]: value } : exp))
    );
  };

  const deleteExpense = (id) => {
    setExpenses((prev) => prev.filter((exp) => exp.id !== id));
  };

  const togglePersonSurfing = (personId) => {
    setPeople((prev) =>
      prev.map((p) => (p.id === personId ? { ...p, surfing: !p.surfing } : p))
    );
  };

  // ==================== CALCULATIONS ====================
  const BASE_BUDGET = 26060;
  const SURF_ADDON = 4000;
  const getEffectiveBudget = (person) =>
    BASE_BUDGET + (person.surfing ? SURF_ADDON : 0);

  const shoppingTotal = shoppingList.reduce(
    (sum, item) => sum + item.quantity * item.price,
    0
  );
  const shoppingBought = shoppingList.filter((item) => item.bought).length;
  const packingPacked = packingList.filter((item) => item.packed).length;
  const totalActivities = activities.reduce(
    (sum, day) => sum + day.items.length,
    0
  );
  const completedActivities = activities.reduce(
    (sum, day) => sum + day.items.filter((item) => item.done).length,
    0
  );
  const totalBudget = people.reduce(
    (sum, person) => sum + getEffectiveBudget(person),
    0
  );
  const baseSpent = expenses.reduce((sum, exp) => sum + exp.amount, 0);
  const totalSpent = baseSpent;
  const totalRemaining = totalBudget - totalSpent;

  const getPersonStats = (personName) => {
    const person = people.find((p) => p.name === personName);
    const budget = getEffectiveBudget(person);
    const baseSpentForPerson = expenses
      .filter((e) => e.person === personName)
      .reduce((sum, e) => sum + e.amount, 0);
    const spent = baseSpentForPerson;
    const remaining = budget - spent;
    return {
      budget,
      spent,
      remaining,
    };
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-cyan-500 via-teal-500 to-emerald-500 p-4 md:p-8">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Archivo+Black&family=Work+Sans:wght@400;600;700&display=swap');
        
        body {
          font-family: 'Work Sans', sans-serif;
          -webkit-tap-highlight-color: transparent;
        }
        
        .title-font {
          font-family: 'Archivo Black', sans-serif;
        }
        
        @keyframes slideIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        @keyframes checkmark {
          0% { transform: scale(0) rotate(0deg); }
          50% { transform: scale(1.2) rotate(180deg); }
          100% { transform: scale(1) rotate(360deg); }
        }
        
        @keyframes pulse {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.05); }
        }

        .drag-over {
          transform: scale(1.01);
          box-shadow: 0 0 0 3px rgba(20, 184, 166, 0.35);
        }
        
        .animate-slide-in { animation: slideIn 0.6s ease-out forwards; }
        .checkmark-animate { animation: checkmark 0.4s ease-out; }
        .pulse-animate { animation: pulse 2s ease-in-out infinite; }
      `}</style>

      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <header className="text-center mb-8 animate-slide-in">
          <h1 className="title-font text-5xl md:text-7xl text-white mb-4 drop-shadow-lg">
            🌴 MIRISSA GIRLS TRIP 🌊
          </h1>
          <p className="text-xl md:text-2xl text-yellow-100 font-semibold mb-4">
            Rashi • Bima • Setha • Shena
          </p>
          <div className="inline-block bg-white/20 backdrop-blur-md px-6 py-3 rounded-full text-white font-bold text-lg border-2 border-white/30">
            May 1-3, 2026
          </div>
        </header>

        {/* Progress Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          <div className="bg-gradient-to-br from-pink-500 to-rose-500 rounded-3xl p-6 text-white shadow-2xl">
            <div className="text-4xl mb-2">💰</div>
            <div className="text-2xl md:text-3xl font-bold">
              LKR {totalRemaining.toLocaleString()}
            </div>
            <div className="text-pink-100 text-sm">Remaining</div>
          </div>
          <div className="bg-gradient-to-br from-orange-500 to-amber-500 rounded-3xl p-6 text-white shadow-2xl">
            <div className="text-4xl mb-2">🛒</div>
            <div className="text-2xl md:text-3xl font-bold">
              {shoppingBought}/{shoppingList.length}
            </div>
            <div className="text-orange-100 text-sm">Bought</div>
          </div>
          <div className="bg-gradient-to-br from-purple-500 to-indigo-500 rounded-3xl p-6 text-white shadow-2xl">
            <div className="text-4xl mb-2">🎒</div>
            <div className="text-2xl md:text-3xl font-bold">
              {packingPacked}/{packingList.length}
            </div>
            <div className="text-purple-100 text-sm">Packed</div>
          </div>
          <div className="bg-gradient-to-br from-teal-500 to-cyan-500 rounded-3xl p-6 text-white shadow-2xl">
            <div className="text-4xl mb-2">✅</div>
            <div className="text-2xl md:text-3xl font-bold">
              {completedActivities}/{totalActivities}
            </div>
            <div className="text-teal-100 text-sm">Done</div>
          </div>
        </div>

        {/* Tabs */}
        <div className="flex gap-2 mb-6 overflow-x-auto pb-2">
          {[
            { id: "itinerary", label: "📅 Itinerary" },
            { id: "shopping", label: "🛒 Shopping" },
            { id: "packing", label: "🎒 Packing" },
            { id: "budget", label: "💰 Budget" },
            { id: "people", label: "👥 People" },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-4 md:px-6 py-3 rounded-2xl font-bold transition-all whitespace-nowrap text-sm md:text-base ${
                activeTab === tab.id
                  ? "bg-white text-teal-600 shadow-lg scale-105"
                  : "bg-white/20 text-white hover:bg-white/30"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* ITINERARY TAB */}
        {activeTab === "itinerary" && (
          <div className="space-y-6">
            {activities.map((day, dayIndex) => (
              <div
                key={day.day}
                className="bg-white/95 backdrop-blur-lg rounded-3xl p-4 md:p-6 shadow-2xl"
              >
                <h2 className="title-font text-2xl md:text-3xl text-teal-600 mb-4 md:mb-6">
                  {day.label}
                </h2>

                <div className="space-y-3">
                  {day.items.map((activity, activityIndex) => (
                    <div
                      key={activity.id}
                      draggable={editingActivity !== activity.id}
                      onDragStart={(e) =>
                        handleDragStart(e, activity, "activity")
                      }
                      onDragEnd={handleDragEnd}
                      onDragOver={(e) => handleDragOver(e, activity.id)}
                      onDrop={(e) =>
                        handleDrop(e, activity, "activity", dayIndex)
                      }
                      className={`rounded-2xl transition-all cursor-move ${
                        activity.done
                          ? "bg-green-100 border-2 border-green-400"
                          : "bg-gradient-to-r from-amber-50 to-yellow-50 border-2 border-amber-200"
                      } ${draggedOver === activity.id ? "drag-over" : ""}`}
                    >
                      {editingActivity === activity.id ? (
                        <div className="p-4 space-y-3">
                          <div className="grid grid-cols-2 gap-2">
                            <input
                              type="time"
                              value={activity.time}
                              onChange={(e) =>
                                updateActivity(
                                  dayIndex,
                                  activity.id,
                                  "time",
                                  e.target.value
                                )
                              }
                              className="px-3 py-2 rounded-lg border-2 border-teal-300 text-sm"
                            />
                            <input
                              type="number"
                              placeholder="Cost"
                              value={activity.cost}
                              onChange={(e) =>
                                updateActivity(
                                  dayIndex,
                                  activity.id,
                                  "cost",
                                  Number(e.target.value)
                                )
                              }
                              className="px-3 py-2 rounded-lg border-2 border-teal-300 text-sm"
                            />
                          </div>
                          <input
                            type="text"
                            placeholder="Activity name"
                            value={activity.name}
                            onChange={(e) =>
                              updateActivity(
                                dayIndex,
                                activity.id,
                                "name",
                                e.target.value
                              )
                            }
                            className="w-full px-3 py-2 rounded-lg border-2 border-teal-300 text-sm"
                          />
                          <input
                            type="text"
                            placeholder="Location"
                            value={activity.location}
                            onChange={(e) =>
                              updateActivity(
                                dayIndex,
                                activity.id,
                                "location",
                                e.target.value
                              )
                            }
                            className="w-full px-3 py-2 rounded-lg border-2 border-teal-300 text-sm"
                          />
                          <div className="flex gap-2">
                            <button
                              onClick={() => setEditingActivity(null)}
                              className="flex-1 bg-green-500 text-white py-2 rounded-lg hover:bg-green-600 font-bold"
                            >
                              <Save size={16} className="inline mr-1" /> Save
                            </button>
                            <button
                              onClick={() => setEditingActivity(null)}
                              className="px-4 bg-gray-300 text-gray-700 py-2 rounded-lg hover:bg-gray-400"
                            >
                              <X size={16} />
                            </button>
                          </div>
                        </div>
                      ) : (
                        <div className="flex items-start gap-3 p-4">
                          <GripVertical
                            className="text-gray-400 flex-shrink-0 mt-1"
                            size={18}
                          />
                          <button
                            onClick={() =>
                              toggleActivity(dayIndex, activity.id)
                            }
                            className={`flex-shrink-0 w-8 h-8 rounded-full border-2 flex items-center justify-center transition-all ${
                              activity.done
                                ? "bg-green-500 border-green-600 checkmark-animate"
                                : "border-gray-300 hover:border-teal-500"
                            }`}
                          >
                            {activity.done && (
                              <Check className="text-white" size={18} />
                            )}
                          </button>
                          <div className="flex-1 min-w-0">
                            <div className="flex flex-wrap gap-2 items-center mb-1">
                              <span className="font-bold text-teal-700 text-sm md:text-base">
                                {activity.time}
                              </span>
                              <span
                                className={`text-base md:text-lg ${
                                  activity.done ? "line-through opacity-50" : ""
                                }`}
                              >
                                {activity.name}
                              </span>
                            </div>
                            <div className="text-gray-600 text-xs md:text-sm mb-2">
                              {activity.location}
                            </div>
                            {activity.cost > 0 && (
                              <div className="inline-block bg-rose-500 text-white px-2 md:px-3 py-1 rounded-full text-xs font-bold">
                                LKR {activity.cost.toLocaleString()}
                              </div>
                            )}
                          </div>
                          <div className="flex gap-1">
                            <button
                              onClick={() => setEditingActivity(activity.id)}
                              className="text-teal-600 hover:bg-teal-100 p-2 rounded"
                            >
                              <Edit2 size={16} />
                            </button>
                            <button
                              onClick={() =>
                                deleteActivity(dayIndex, activity.id)
                              }
                              className="text-red-500 hover:bg-red-100 p-2 rounded"
                            >
                              <Trash2 size={16} />
                            </button>
                            <button
                              onClick={() =>
                                moveActivity(dayIndex, activityIndex, 1)
                              }
                              className="text-gray-400 hover:text-teal-600 p-1"
                              disabled={activityIndex === day.items.length - 1}
                            >
                              <ChevronDown size={18} />
                            </button>
                          </div>
                        </div>
                      )}
                    </div>
                  ))}
                </div>

                {/* Add New Activity */}
                <div className="mt-4 bg-teal-50 p-3 md:p-4 rounded-2xl border-2 border-teal-200">
                  <div className="grid grid-cols-1 md:grid-cols-5 gap-2">
                    <input
                      type="time"
                      placeholder="Time"
                      value={
                        newActivity.day === day.day ? newActivity.time : ""
                      }
                      onChange={(e) =>
                        setNewActivity({
                          ...newActivity,
                          day: day.day,
                          time: e.target.value,
                        })
                      }
                      className="px-3 py-2 rounded-lg border-2 border-teal-300 text-sm"
                    />
                    <input
                      type="text"
                      placeholder="Activity name"
                      value={
                        newActivity.day === day.day ? newActivity.name : ""
                      }
                      onChange={(e) =>
                        setNewActivity({
                          ...newActivity,
                          day: day.day,
                          name: e.target.value,
                        })
                      }
                      className="px-3 py-2 rounded-lg border-2 border-teal-300 text-sm md:col-span-2"
                    />
                    <input
                      type="text"
                      placeholder="Location"
                      value={
                        newActivity.day === day.day ? newActivity.location : ""
                      }
                      onChange={(e) =>
                        setNewActivity({
                          ...newActivity,
                          day: day.day,
                          location: e.target.value,
                        })
                      }
                      className="px-3 py-2 rounded-lg border-2 border-teal-300 text-sm"
                    />
                    <button
                      onClick={() => {
                        if (newActivity.day === day.day) addActivity();
                      }}
                      className="bg-gradient-to-r from-teal-500 to-cyan-500 text-white py-2 rounded-lg font-bold hover:scale-105 transition-transform flex items-center justify-center gap-2 text-sm"
                    >
                      <Plus size={18} /> Add
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* SHOPPING TAB */}
        {activeTab === "shopping" && (
          <div className="bg-white/95 backdrop-blur-lg rounded-3xl p-4 md:p-6 shadow-2xl">
            <h2 className="title-font text-2xl md:text-3xl text-teal-600 mb-4 md:mb-6">
              🛒 Shopping List - Cargills
            </h2>

            {/* Add New Item */}
            <div className="bg-gradient-to-r from-teal-50 to-cyan-50 p-3 md:p-4 rounded-2xl mb-4 md:mb-6 border-2 border-teal-200">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-2 md:gap-3">
                <input
                  type="text"
                  placeholder="Item (e.g., 🍪 Cookies)"
                  value={newShoppingItem.item}
                  onChange={(e) =>
                    setNewShoppingItem({
                      ...newShoppingItem,
                      item: e.target.value,
                    })
                  }
                  className="px-3 md:px-4 py-2 rounded-xl border-2 border-teal-300 focus:border-teal-500 outline-none text-sm"
                />
                <input
                  type="number"
                  placeholder="Qty"
                  value={newShoppingItem.quantity}
                  onChange={(e) =>
                    setNewShoppingItem({
                      ...newShoppingItem,
                      quantity: Number(e.target.value),
                    })
                  }
                  className="px-3 md:px-4 py-2 rounded-xl border-2 border-teal-300 focus:border-teal-500 outline-none text-sm"
                />
                <input
                  type="number"
                  placeholder="Price (LKR)"
                  value={newShoppingItem.price}
                  onChange={(e) =>
                    setNewShoppingItem({
                      ...newShoppingItem,
                      price: Number(e.target.value),
                    })
                  }
                  className="px-3 md:px-4 py-2 rounded-xl border-2 border-teal-300 focus:border-teal-500 outline-none text-sm"
                />
                <button
                  onClick={addShoppingItem}
                  className="bg-gradient-to-r from-teal-500 to-cyan-500 text-white px-4 md:px-6 py-2 rounded-xl font-bold hover:scale-105 transition-transform flex items-center justify-center gap-2 text-sm"
                >
                  <Plus size={18} /> Add
                </button>
              </div>
            </div>

            {/* Shopping Items */}
            <div className="space-y-3 mb-6">
              {shoppingList.map((item, index) => (
                <div
                  key={item.id}
                  draggable={editingShop !== item.id}
                  onDragStart={(e) => handleDragStart(e, item, "shopping")}
                  onDragEnd={handleDragEnd}
                  onDragOver={(e) => handleDragOver(e, item.id)}
                  onDrop={(e) => handleDrop(e, item, "shopping")}
                  className={`rounded-2xl transition-all ${
                    item.bought
                      ? "bg-green-100 border-2 border-green-400"
                      : "bg-gradient-to-r from-orange-50 to-amber-50 border-2 border-orange-200"
                  } ${draggedOver === item.id ? "drag-over" : ""} ${
                    editingShop === item.id ? "" : "cursor-move"
                  }`}
                >
                  {editingShop === item.id ? (
                    <div className="p-4 space-y-3">
                      <input
                        type="text"
                        value={item.item}
                        onChange={(e) =>
                          updateShoppingItem(item.id, "item", e.target.value)
                        }
                        className="w-full px-3 py-2 rounded-lg border-2 border-teal-300 text-sm"
                      />
                      <div className="grid grid-cols-2 gap-2">
                        <input
                          type="number"
                          placeholder="Quantity"
                          value={item.quantity}
                          onChange={(e) =>
                            updateShoppingItem(
                              item.id,
                              "quantity",
                              Number(e.target.value)
                            )
                          }
                          className="px-3 py-2 rounded-lg border-2 border-teal-300 text-sm"
                        />
                        <input
                          type="number"
                          placeholder="Price"
                          value={item.price}
                          onChange={(e) =>
                            updateShoppingItem(
                              item.id,
                              "price",
                              Number(e.target.value)
                            )
                          }
                          className="px-3 py-2 rounded-lg border-2 border-teal-300 text-sm"
                        />
                      </div>
                      <div className="flex gap-2">
                        <button
                          onClick={() => setEditingShop(null)}
                          className="flex-1 bg-green-500 text-white py-2 rounded-lg hover:bg-green-600 font-bold text-sm"
                        >
                          <Save size={16} className="inline mr-1" /> Save
                        </button>
                        <button
                          onClick={() => setEditingShop(null)}
                          className="px-4 bg-gray-300 text-gray-700 py-2 rounded-lg hover:bg-gray-400"
                        >
                          <X size={16} />
                        </button>
                      </div>
                    </div>
                  ) : (
                    <div className="flex items-center gap-3 p-4">
                      <GripVertical
                        className="text-gray-400 flex-shrink-0"
                        size={18}
                      />
                      <button
                        onClick={() => toggleShoppingItem(item.id)}
                        className={`flex-shrink-0 w-8 h-8 rounded-full border-2 flex items-center justify-center transition-all ${
                          item.bought
                            ? "bg-green-500 border-green-600 checkmark-animate"
                            : "border-gray-300 hover:border-teal-500"
                        }`}
                      >
                        {item.bought && (
                          <Check className="text-white" size={18} />
                        )}
                      </button>
                      <div className="flex-1 min-w-0">
                        <span
                          className={`text-base md:text-lg block ${
                            item.bought ? "line-through opacity-50" : ""
                          }`}
                        >
                          {item.item}
                        </span>
                        <div className="text-xs md:text-sm text-gray-600">
                          Qty: {item.quantity} × LKR {item.price} = LKR{" "}
                          {(item.quantity * item.price).toLocaleString()}
                        </div>
                      </div>
                      <div className="flex flex-col gap-1">
                        <button
                          onClick={() => moveShoppingItem(index, -1)}
                          className="text-gray-400 hover:text-teal-600 p-1"
                          disabled={index === 0}
                        >
                          <ChevronUp size={18} />
                        </button>
                        <button
                          onClick={() => setEditingShop(item.id)}
                          className="text-teal-600 hover:bg-teal-100 p-1 rounded"
                        >
                          <Edit2 size={16} />
                        </button>
                        <button
                          onClick={() => deleteShoppingItem(item.id)}
                          className="text-red-500 hover:bg-red-100 p-1 rounded"
                        >
                          <Trash2 size={16} />
                        </button>
                        <button
                          onClick={() => moveShoppingItem(index, 1)}
                          className="text-gray-400 hover:text-teal-600 p-1"
                          disabled={index === shoppingList.length - 1}
                        >
                          <ChevronDown size={18} />
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Total */}
            <div className="bg-gradient-to-r from-rose-500 to-pink-500 text-white p-4 md:p-6 rounded-2xl">
              <div className="flex justify-between items-center">
                <span className="text-xl md:text-2xl font-bold">Total:</span>
                <span className="text-3xl md:text-4xl font-bold">
                  LKR {shoppingTotal.toLocaleString()}
                </span>
              </div>
            </div>
          </div>
        )}

        {/* PACKING TAB */}
        {activeTab === "packing" && (
          <div className="bg-white/95 backdrop-blur-lg rounded-3xl p-4 md:p-6 shadow-2xl">
            <h2 className="title-font text-2xl md:text-3xl text-teal-600 mb-4 md:mb-6">
              🎒 Packing List
            </h2>

            {/* Add New Item */}
            <div className="bg-gradient-to-r from-purple-50 to-indigo-50 p-3 md:p-4 rounded-2xl mb-4 md:mb-6 border-2 border-purple-200">
              <div className="flex gap-2 md:gap-3">
                <input
                  type="text"
                  placeholder="Add item (e.g., 🕶️ Sunglasses)"
                  value={newPackingItem.item}
                  onChange={(e) =>
                    setNewPackingItem({
                      ...newPackingItem,
                      item: e.target.value,
                    })
                  }
                  onKeyPress={(e) => e.key === "Enter" && addPackingItem()}
                  className="flex-1 px-3 md:px-4 py-2 rounded-xl border-2 border-purple-300 focus:border-purple-500 outline-none text-sm"
                />
                <select
                  value={newPackingItem.category}
                  onChange={(e) =>
                    setNewPackingItem({
                      ...newPackingItem,
                      category: e.target.value,
                    })
                  }
                  className="px-2 md:px-3 py-2 rounded-xl border-2 border-purple-300 text-sm"
                >
                  <option>Essentials</option>
                  <option>Outfits</option>
                  <option>Games</option>
                </select>
                <button
                  onClick={addPackingItem}
                  className="bg-gradient-to-r from-purple-500 to-indigo-500 text-white px-4 md:px-6 py-2 rounded-xl font-bold hover:scale-105 transition-transform flex items-center gap-2 text-sm"
                >
                  <Plus size={18} /> Add
                </button>
              </div>
            </div>

            {/* Categorized Packing Items */}
            <div className="space-y-4">
              {Object.entries(groupedPacking).map(([category, items]) => {
                const categoryIcons = {
                  Essentials: "🧴",
                  Outfits: "👗",
                  Games: "🎲",
                };
                const packedInCategory = items.filter((i) => i.packed).length;

                return (
                  <div
                    key={category}
                    className="border-2 border-purple-200 rounded-2xl overflow-hidden"
                  >
                    {/* Category Header */}
                    <button
                      onClick={() => toggleCategory(category)}
                      className="w-full bg-gradient-to-r from-purple-100 to-indigo-100 p-4 flex items-center justify-between hover:from-purple-200 hover:to-indigo-200 transition-all"
                    >
                      <div className="flex items-center gap-3">
                        <span className="text-2xl">
                          {categoryIcons[category]}
                        </span>
                        <span className="font-bold text-lg text-purple-900">
                          {category}
                        </span>
                        <span className="text-sm text-purple-600">
                          {packedInCategory}/{items.length} packed
                        </span>
                      </div>
                      {collapsedCategories[category] ? (
                        <ChevronRight className="text-purple-600" size={24} />
                      ) : (
                        <ChevronDown className="text-purple-600" size={24} />
                      )}
                    </button>

                    {/* Category Items */}
                    {!collapsedCategories[category] && (
                      <div className="p-3 space-y-2">
                        {items.map((item) => (
                          <div
                            key={item.id}
                            draggable
                            onDragStart={(e) =>
                              handleDragStart(e, item, "packing")
                            }
                            onDragEnd={handleDragEnd}
                            onDragOver={(e) => handleDragOver(e, item.id)}
                            onDrop={(e) => handleDrop(e, item, "packing")}
                            className={`flex items-center gap-3 p-3 rounded-xl transition-all cursor-move ${
                              item.packed
                                ? "bg-green-100 border-2 border-green-400"
                                : "bg-gradient-to-r from-yellow-50 to-orange-50 border-2 border-yellow-200"
                            } ${draggedOver === item.id ? "drag-over" : ""}`}
                          >
                            <GripVertical
                              className="text-gray-400 flex-shrink-0"
                              size={18}
                            />
                            <button
                              onClick={() => togglePackingItem(item.id)}
                              className={`flex-shrink-0 w-7 h-7 rounded-full border-2 flex items-center justify-center transition-all ${
                                item.packed
                                  ? "bg-green-500 border-green-600 checkmark-animate"
                                  : "border-gray-300 hover:border-purple-500"
                              }`}
                            >
                              {item.packed && (
                                <Check className="text-white" size={16} />
                              )}
                            </button>
                            <span
                              className={`flex-1 text-sm md:text-base ${
                                item.packed ? "line-through opacity-50" : ""
                              }`}
                            >
                              {item.item}
                            </span>
                            <button
                              onClick={() => deletePackingItem(item.id)}
                              className="text-red-500 hover:bg-red-100 p-1 rounded"
                            >
                              <Trash2 size={16} />
                            </button>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* BUDGET TAB */}
        {activeTab === "budget" && (
          <div className="space-y-6">
            <div className="bg-gradient-to-br from-pink-500 to-rose-500 rounded-3xl p-6 md:p-8 text-white shadow-2xl text-center">
              <h2 className="title-font text-2xl md:text-3xl mb-4">
                💰 Budget Overview
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
                <div>
                  <div className="text-lg md:text-xl opacity-90 mb-2">
                    Total Budget
                  </div>
                  <div className="text-3xl md:text-4xl font-bold">
                    LKR {totalBudget.toLocaleString()}
                  </div>
                </div>
                <div>
                  <div className="text-lg md:text-xl opacity-90 mb-2">
                    Total Spent
                  </div>
                  <div className="text-3xl md:text-4xl font-bold">
                    LKR {totalSpent.toLocaleString()}
                  </div>
                </div>
                <div>
                  <div className="text-lg md:text-xl opacity-90 mb-2">
                    Remaining
                  </div>
                  <div className="text-3xl md:text-4xl font-bold pulse-animate">
                    LKR {totalRemaining.toLocaleString()}
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white/95 backdrop-blur-lg rounded-3xl p-4 md:p-6 shadow-2xl">
              <h3 className="title-font text-xl md:text-2xl text-teal-600 mb-4">
                🏨 Accommodation
              </h3>
              <div className="bg-gradient-to-br from-emerald-500 to-teal-600 text-white p-4 md:p-6 rounded-2xl">
                <div className="text-xl md:text-2xl font-bold mb-4">
                  ARA Beach Resort
                </div>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-2 md:gap-3 mb-4">
                  {[
                    "✨ Good Vibes",
                    "❄️ AC",
                    "🍳 Breakfast",
                    "🚿 Premium Bath",
                    "🏖️ Beachfront",
                    "🏊 Pool",
                  ].map((amenity) => (
                    <div
                      key={amenity}
                      className="bg-white/20 backdrop-blur-sm px-2 md:px-3 py-2 rounded-lg text-center text-xs md:text-sm font-semibold"
                    >
                      {amenity}
                    </div>
                  ))}
                </div>
                <div className="text-center text-3xl md:text-4xl font-bold bg-white/20 backdrop-blur-sm p-4 rounded-2xl">
                  LKR 56,000
                </div>
              </div>
            </div>

            {/* Add Expense */}
            <div className="bg-white/95 backdrop-blur-lg rounded-3xl p-4 md:p-6 shadow-2xl">
              <h3 className="title-font text-xl md:text-2xl text-teal-600 mb-4">
                ➕ Add Expense
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-5 gap-2 md:gap-3">
                <input
                  type="date"
                  value={newExpense.date}
                  onChange={(e) =>
                    setNewExpense({ ...newExpense, date: e.target.value })
                  }
                  className="px-3 md:px-4 py-2 rounded-xl border-2 border-teal-300 focus:border-teal-500 outline-none text-sm"
                />
                <input
                  type="text"
                  placeholder="Description"
                  value={newExpense.description}
                  onChange={(e) =>
                    setNewExpense({
                      ...newExpense,
                      description: e.target.value,
                    })
                  }
                  className="px-3 md:px-4 py-2 rounded-xl border-2 border-teal-300 focus:border-teal-500 outline-none text-sm"
                />
                <select
                  value={newExpense.person}
                  onChange={(e) =>
                    setNewExpense({ ...newExpense, person: e.target.value })
                  }
                  className="px-3 md:px-4 py-2 rounded-xl border-2 border-teal-300 focus:border-teal-500 outline-none text-sm"
                >
                  {people.map((p) => (
                    <option key={p.id} value={p.name}>
                      {p.name}
                    </option>
                  ))}
                </select>
                <input
                  type="number"
                  placeholder="Amount (LKR)"
                  value={newExpense.amount}
                  onChange={(e) =>
                    setNewExpense({
                      ...newExpense,
                      amount: Number(e.target.value),
                    })
                  }
                  className="px-3 md:px-4 py-2 rounded-xl border-2 border-teal-300 focus:border-teal-500 outline-none text-sm"
                />
                <button
                  onClick={addExpense}
                  className="bg-gradient-to-r from-teal-500 to-cyan-500 text-white px-4 md:px-6 py-2 rounded-xl font-bold hover:scale-105 transition-transform flex items-center justify-center gap-2 text-sm"
                >
                  <Plus size={18} /> Add
                </button>
              </div>
            </div>

            {/* Expense List */}
            <div className="bg-white/95 backdrop-blur-lg rounded-3xl p-4 md:p-6 shadow-2xl">
              <h3 className="title-font text-xl md:text-2xl text-teal-600 mb-4">
                📝 All Expenses
              </h3>
              <div className="space-y-3">
                {expenses.map((exp) => (
                  <div
                    key={exp.id}
                    className="rounded-2xl bg-gradient-to-r from-blue-50 to-indigo-50 border-2 border-blue-200"
                  >
                    {editingExpense === exp.id ? (
                      <div className="p-4 space-y-3">
                        <div className="grid grid-cols-2 gap-2">
                          <input
                            type="date"
                            value={exp.date}
                            onChange={(e) =>
                              updateExpense(exp.id, "date", e.target.value)
                            }
                            className="px-3 py-2 rounded-lg border-2 border-teal-300 text-sm"
                          />
                          <select
                            value={exp.person}
                            onChange={(e) =>
                              updateExpense(exp.id, "person", e.target.value)
                            }
                            className="px-3 py-2 rounded-lg border-2 border-teal-300 text-sm"
                          >
                            {people.map((p) => (
                              <option key={p.id} value={p.name}>
                                {p.name}
                              </option>
                            ))}
                          </select>
                        </div>
                        <input
                          type="text"
                          value={exp.description}
                          onChange={(e) =>
                            updateExpense(exp.id, "description", e.target.value)
                          }
                          className="w-full px-3 py-2 rounded-lg border-2 border-teal-300 text-sm"
                        />
                        <input
                          type="number"
                          value={exp.amount}
                          onChange={(e) =>
                            updateExpense(
                              exp.id,
                              "amount",
                              Number(e.target.value)
                            )
                          }
                          className="w-full px-3 py-2 rounded-lg border-2 border-teal-300 text-sm"
                        />
                        <div className="flex gap-2">
                          <button
                            onClick={() => setEditingExpense(null)}
                            className="flex-1 bg-green-500 text-white py-2 rounded-lg hover:bg-green-600 font-bold text-sm"
                          >
                            <Save size={16} className="inline mr-1" /> Save
                          </button>
                          <button
                            onClick={() => setEditingExpense(null)}
                            className="px-4 bg-gray-300 text-gray-700 py-2 rounded-lg hover:bg-gray-400"
                          >
                            <X size={16} />
                          </button>
                        </div>
                      </div>
                    ) : (
                      <div className="flex items-center gap-3 p-4">
                        <div className="flex-1 min-w-0">
                          <div className="font-bold text-base md:text-lg">
                            {exp.description}
                          </div>
                          <div className="text-xs md:text-sm text-gray-600">
                            {exp.date} • {exp.person}
                          </div>
                        </div>
                        <div className="text-lg md:text-xl font-bold text-teal-600">
                          LKR {exp.amount.toLocaleString()}
                        </div>
                        <div className="flex gap-1">
                          <button
                            onClick={() => setEditingExpense(exp.id)}
                            className="text-teal-600 hover:bg-teal-100 p-2 rounded"
                          >
                            <Edit2 size={16} />
                          </button>
                          <button
                            onClick={() => deleteExpense(exp.id)}
                            className="text-red-500 hover:bg-red-100 p-2 rounded"
                          >
                            <Trash2 size={16} />
                          </button>
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* PEOPLE TAB */}
        {activeTab === "people" && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
            {people.map((person) => {
              const stats = getPersonStats(person.name);
              const percentage = (stats.spent / stats.budget) * 100;

              return (
                <div
                  key={person.id}
                  className="bg-white/95 backdrop-blur-lg rounded-3xl p-4 md:p-6 shadow-2xl"
                >
                  <div className="flex items-center justify-between mb-4 md:mb-6">
                    <h2 className="title-font text-2xl md:text-3xl text-teal-600">
                      {person.name}
                    </h2>
                    <div className="flex items-center gap-2">
                      {person.surfing && <span className="text-2xl">🏄</span>}
                      <button
                        onClick={() => togglePersonSurfing(person.id)}
                        className={`px-3 py-1 rounded-full text-xs font-bold text-white ${
                          person.surfing
                            ? "bg-teal-500 hover:bg-teal-600"
                            : "bg-gray-400 hover:bg-gray-500"
                        }`}
                      >
                        {person.surfing ? "Surf Yes" : "Surf No"}
                      </button>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-4 rounded-2xl">
                      <div className="text-xs md:text-sm text-gray-600 mb-1">
                        Budget
                      </div>
                      <div className="text-xl md:text-2xl font-bold text-teal-600">
                        LKR {stats.budget.toLocaleString()}
                      </div>
                    </div>

                    <div className="bg-gradient-to-r from-rose-50 to-pink-50 p-4 rounded-2xl">
                      <div className="text-xs md:text-sm text-gray-600 mb-1">
                        Spent
                      </div>
                      <div className="text-xl md:text-2xl font-bold text-rose-600">
                        LKR {stats.spent.toLocaleString()}
                      </div>
                    </div>

                    <div className="bg-gradient-to-r from-green-50 to-emerald-50 p-4 rounded-2xl">
                      <div className="text-xs md:text-sm text-gray-600 mb-1">
                        Remaining
                      </div>
                      <div className="text-xl md:text-2xl font-bold text-green-600">
                        LKR {stats.remaining.toLocaleString()}
                      </div>
                    </div>

                    {/* Progress Bar */}
                    <div className="mt-4">
                      <div className="flex justify-between text-xs md:text-sm mb-2">
                        <span>Progress</span>
                        <span className="font-bold">
                          {percentage.toFixed(1)}%
                        </span>
                      </div>
                      <div className="h-3 bg-gray-200 rounded-full overflow-hidden">
                        <div
                          className="h-full bg-gradient-to-r from-teal-500 to-cyan-500 transition-all duration-500"
                          style={{ width: `${Math.min(percentage, 100)}%` }}
                        />
                      </div>
                    </div>

                    {/* Recent Expenses */}
                    <div className="mt-6">
                      <div className="text-xs md:text-sm font-bold text-gray-600 mb-2">
                        Recent Expenses
                      </div>
                      <div className="space-y-2">
                        {expenses
                          .filter((e) => e.person === person.name)
                          .slice(-3)
                          .map((exp) => (
                            <div
                              key={exp.id}
                              className="flex justify-between text-xs md:text-sm bg-gray-50 p-2 rounded-lg"
                            >
                              <span className="text-gray-700 truncate flex-1">
                                {exp.description}
                              </span>
                              <span className="font-bold ml-2">
                                LKR {exp.amount.toLocaleString()}
                              </span>
                            </div>
                          ))}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}

        {/* Footer */}
        <footer className="text-center text-white mt-12 py-6">
          <p className="text-xl md:text-2xl mb-2">
            🌴 Get ready for an amazing beach adventure! 🌊
          </p>
          <p className="opacity-80 text-sm md:text-base">
            May 1-3, 2026 • Mirissa, Sri Lanka
          </p>
          <p className="text-xs md:text-sm mt-4 opacity-70">
            ✨ All changes auto-save in your browser
          </p>
        </footer>
      </div>
    </div>
  );
}
