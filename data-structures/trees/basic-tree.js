// TreeNode class representing each node in the tree
class TreeNode {
  constructor(value, children = []) {
    this.data = value; // The data stored in the node (e.g., name of the drink or category)
    this.children = children; // Children of this node (e.g., subcategories or types)
  }

  // Method to add a child node to the current node
  addChild(node) {
    this.children.push(node); // Adds a new node as a child
  }

  // Method to print the tree structure, showing the hierarchy with indentation
  printTree(currentLevel = 0) {
    let tabSpaces = ''; // String to accumulate indentation for the current level
    for (let l = 0; l < currentLevel; l++) {
      tabSpaces += '\t'; // Adds a tab space for each level of depth
    }
    console.log(tabSpaces + this.data); // Print the current node's data (name)

    // Recursively print each child node, increasing the level (depth) by 1
    this.children.forEach((child) => {
      child.printTree(currentLevel + 1); // Call printTree on the child node, increasing the indentation
    });
  }
}

// Test case: Drinks hierarchy with 5 levels
// const drinks = new TreeNode('Drinks'); // Root node representing all drinks

// Level 1: Categories of drinks
// const hotDrinks = new TreeNode('Hot'); // Hot drinks category
// const coldDrinks = new TreeNode('Cold'); // Cold drinks category

// Level 2: Specific drink types under Hot and Cold categories
// Hot drink
// const tea = new TreeNode('Tea'); // Hot drink: Tea
// const coffee = new TreeNode('Coffee'); // Hot drink: Coffee

// Cold drink
// const alcoholicCold = new TreeNode('Alcoholic'); // Cold drink: Alcoholic drinks
// const nonAlcoholicCold = new TreeNode('Non-Alcoholic'); // Cold drink: Non-Alcoholic drinks

// Level 3: Specific types of hot drinks and cold drinks
// Tea
// const blackTea = new TreeNode('Black Tea'); // Type of tea
// const greenTea = new TreeNode('Green Tea'); // Type of tea
// Coffee
// const espresso = new TreeNode('Espresso'); // Type of coffee
// const latte = new TreeNode('Latte'); // Type of coffee

// Alcoholic drink
// const beer = new TreeNode('Beer'); // Type of alcoholic drink
// const wine = new TreeNode('Wine'); // Type of alcoholic drink

// Non-alcoholic drink
// const soda = new TreeNode('Soda'); // Type of non-alcoholic drink
// const juice = new TreeNode('Juice'); // Type of non-alcoholic drink

// Level 4: Variations of each drink type
// Black tea variation
// blackTea.addChild(new TreeNode('Loose Leaf')); // Black tea variation
// blackTea.addChild(new TreeNode('Tea Bag')); // Black tea variation

// Green tea variation
// greenTea.addChild(new TreeNode('Loose Leaf')); // Green tea variation
// greenTea.addChild(new TreeNode('Tea Bag')); // Green tea variation

// Espresso variation
// espresso.addChild(new TreeNode('Single Shot')); // Espresso variation
// espresso.addChild(new TreeNode('Double Shot')); // Espresso variation

// Latte variation
// latte.addChild(new TreeNode('Vanilla')); // Latte variation
// latte.addChild(new TreeNode('Caramel')); // Latte variation

// Beer variation
// beer.addChild(new TreeNode('Pale Ale')); // Beer variation
// beer.addChild(new TreeNode('Lager')); // Beer variation

// Wine variation
// wine.addChild(new TreeNode('Red Wine')); // Wine variation
// wine.addChild(new TreeNode('White Wine')); // Wine variation

// Soda variation
// soda.addChild(new TreeNode('Cola')); // Soda variation
// soda.addChild(new TreeNode('Lemonade')); // Soda variation

// Juice variation
// juice.addChild(new TreeNode('Orange Juice')); // Juice variation
// juice.addChild(new TreeNode('Apple Juice')); // Juice variation

// Level 5: Structuring the drinks hierarchy, with drinks and their variations
// Hot Drink Children
// hotDrinks.addChild(tea); // Add tea as a hot drink
// hotDrinks.addChild(coffee); // Add coffee as a hot drink

// Cold Drink Children
// coldDrinks.addChild(alcoholicCold); // Add alcoholic drinks under cold drinks
// coldDrinks.addChild(nonAlcoholicCold); // Add non-alcoholic drinks under cold drinks

// Alcoholic Cold Drink Children
// alcoholicCold.addChild(beer); // Add beer as an alcoholic drink
// alcoholicCold.addChild(wine); // Add wine as an alcoholic drink

// Nonalcoholic Cold Drink Children
// nonAlcoholicCold.addChild(soda); // Add soda as a non-alcoholic drink
// nonAlcoholicCold.addChild(juice); // Add juice as a non-alcoholic drink

// Add specific types of hot drinks and coffee
// tea.addChild(blackTea); // Add black tea as a type of tea
// tea.addChild(greenTea); // Add green tea as a type of tea
// coffee.addChild(espresso); // Add espresso as a type of coffee
// coffee.addChild(latte); // Add latte as a type of coffee

// Adding the hot and cold categories to the root (Drinks)
// drinks.addChild(hotDrinks); // Add hot drinks category under Drinks
// drinks.addChild(coldDrinks); // Add cold drinks category under Drinks

// Finally, print the entire tree structure
// drinks.printTree(); // Print the tree structure starting from the "Drinks" node
