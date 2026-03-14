const masterBank = {
  "Mathematics": [
    // --- NUMBER BASES & ARITHMETIC (15 Questions) ---
    {q: "Convert 101.011₂ to base 10.", a: "5.375", options: ["5.125", "5.250", "5.375", "5.750"]},
    {q: "Express 0.00000048 in standard form.", a: "4.8 × 10⁻⁷", options: ["4.8 × 10⁻⁶", "4.8 × 10⁻⁷", "4.8 × 10⁻⁸", "0.48 × 10⁻⁶"]},
    {q: "If 12x = 35₈, find the value of x.", a: "29", options: ["27", "28", "29", "30"]},
    {q: "Simplify: 3⅓ - 1¾ + ⅔", a: "2¼", options: ["1½", "2¼", "2½", "3¼"]},
    {q: "A man bought a car for ₦2,000,000 and sold it for ₦1,800,000. Find his percentage loss.", a: "10%", options: ["5%", "10%", "15%", "20%"]},
    {q: "Evaluate: (64)^(1/3) + (16)^(1/2)", a: "8", options: ["4", "6", "8", "12"]},
    {q: "Calculate the simple interest on ₦15,000 for 4 years at 6% per annum.", a: "₦3,600", options: ["₦2,400", "₦3,000", "₦3,600", "₦4,200"]},
    {q: "Find the H.C.F of 54, 72, and 90.", a: "18", options: ["9", "18", "27", "36"]},
    {q: "If 15% of a number is 45, what is the number?", a: "300", options: ["150", "200", "300", "450"]},
    {q: "Simplify: (2.5 × 10⁴) × (4 × 10⁻²)", a: "1000", options: ["100", "400", "1000", "10000"]},
    {q: "Find the L.C.M of 12, 18, and 24.", a: "72", options: ["36", "48", "72", "96"]},
    {q: "Convert 0.625 to a fraction in its lowest terms.", a: "5/8", options: ["3/4", "5/8", "7/8", "1/2"]},
    {q: "What is the value of 5! (5 factorial)?", a: "120", options: ["60", "100", "120", "240"]},
    {q: "Express 75 base 10 in base 2.", a: "1001011₂", options: ["1001011₂", "1101001₂", "1010101₂", "1110011₂"]},
    {q: "Evaluate: √1.44 + √0.09", a: "1.5", options: ["1.2", "1.3", "1.5", "1.6"]},

    // --- ALGEBRA & VARIATION (15 Questions) ---
    {q: "Solve for y: (y-2)/3 - (y+1)/4 = 1", a: "23", options: ["11", "15", "19", "23"]},
    {q: "Find the value of x if 3^(2x-1) = 27", a: "2", options: ["1", "2", "3", "4"]},
    {q: "Solve the simultaneous equations: 3x + 2y = 12 and 5x - 2y = 4", a: "x=2, y=3", options: ["x=2, y=3", "x=3, y=2", "x=1, y=4.5", "x=4, y=0"]},
    {q: "Factorize: a² - b² + 2a + 1", a: "(a+1-b)(a+1+b)", options: ["(a-b)(a+b)", "(a+1-b)(a+1+b)", "(a-1+b)(a+1-b)", "(a+b+1)(a-b-1)"]},
    {q: "If y varies directly as the square of x, and y=12 when x=2, find y when x=3.", a: "27", options: ["18", "24", "27", "36"]},
    {q: "Find the range of values for which 2x + 3 > 5x - 6.", a: "x < 3", options: ["x > 3", "x < 3", "x > 9", "x < 9"]},
    {q: "Divide (x² - 5x + 6) by (x - 2).", a: "x - 3", options: ["x + 3", "x - 3", "x + 2", "x - 2"]},
    {q: "Simplify: log 8 / log 2", a: "3", options: ["2", "3", "4", "8"]},
    {q: "Find the roots of x² - 9 = 0", a: "3, -3", options: ["3, 0", "9, -9", "3, -3", "1, -9"]},
    {q: "If p = 4 and q = -3, evaluate: 2p² - q²", a: "23", options: ["14", "23", "25", "41"]},
    {q: "Solve for m: 10^m = 0.001", a: "-3", options: ["-2", "-3", "2", "3"]},
    {q: "Rationalize: 1 / (√2 + 1)", a: "√2 - 1", options: ["√2 + 1", "√2", "√2 - 1", "1 - √2"]},
    {q: "If varies inversely as n, and m=5 when n=2, find m when n=4.", a: "2.5", options: ["1.25", "2.5", "10", "20"]},
    {q: "Expand: (2x - 3)(x + 5)", a: "2x² + 7x - 15", options: ["2x² - 7x - 15", "2x² + 7x - 15", "2x² + 13x - 15", "2x² + 3x - 15"]},
    {q: "Find the quadratic equation whose roots are 2 and -3.", a: "x² + x - 6 = 0", options: ["x² - x - 6 = 0", "x² + x - 6 = 0", "x² - 5x + 6 = 0", "x² + 5x + 6 = 0"]},

    // --- GEOMETRY, TRIG & MENSURATION (15 Questions) ---
    {q: "The volume of a cube is 64cm³. Find its total surface area.", a: "96cm²", options: ["16cm²", "64cm²", "96cm²", "384cm²"]},
    {q: "Find the angle θ if tan θ = 1.000", a: "45°", options: ["30°", "45°", "60°", "90°"]},
    {q: "The length of an arc of a circle of radius 7cm is 11cm. Find the angle at the center. (π=22/7)", a: "90°", options: ["45°", "60°", "90°", "120°"]},
    {q: "Find the coordinates of the midpoint of the line joining (4, 8) and (2, 4).", a: "(3, 6)", options: ["(2, 4)", "(3, 6)", "(6, 12)", "(1, 2)"]},
    {q: "The sum of the exterior angles of any convex polygon is?", a: "360°", options: ["180°", "360°", "540°", "720°"]},
    {q: "Calculate the area of a triangle with base 10cm and height 12cm.", a: "60cm²", options: ["60cm²", "120cm²", "144cm²", "240cm²"]},
    {q: "Find the gradient of the line 3y - 6x = 9", a: "2", options: ["-2", "2", "3", "6"]},
    {q: "A square has a perimeter of 40cm. What is its area?", a: "100cm²", options: ["40cm²", "80cm²", "100cm²", "1600cm²"]},
    {q: "If sin x = 0.5, find the acute angle x.", a: "30°", options: ["30°", "45°", "60°", "90°"]},
    {q: "Calculate the circumference of a circle with diameter 14cm. (π=22/7)", a: "44cm", options: ["22cm", "44cm", "88cm", "154cm"]},
    {q: "The interior angle of a regular polygon is 120°. How many sides has it?", a: "6", options: ["4", "5", "6", "8"]},
    {q: "Find the distance between (0,0) and (6,8).", a: "10", options: ["7", "10", "14", "25"]},
    {q: "What is the value of cos 60°?", a: "0.5", options: ["0.5", "0.707", "0.866", "1.0"]},
    {q: "The area of a circle is 154cm². Find its radius. (π=22/7)", a: "7cm", options: ["3.5cm", "7cm", "14cm", "49cm"]},
    {q: "A cylinder has radius 7cm and height 5cm. Find its curved surface area. (π=22/7)", a: "220cm²", options: ["110cm²", "220cm²", "440cm²", "770cm²"]},

    // --- STATISTICS & PROBABILITY (15 Questions) ---
    {q: "Find the mean of 8, 12, 20, 15, 5.", a: "12", options: ["10", "12", "15", "20"]},
    {q: "The median of 3, 7, 9, 4, 12, 10, 5 is?", a: "7", options: ["5", "7", "9", "10"]},
    {q: "A bag contains 5 red and 7 white balls. Find the probability of picking a red ball.", a: "5/12", options: ["5/7", "7/12", "5/12", "1/2"]},
    {q: "What is the mode of 2, 3, 3, 4, 5, 5, 5, 6, 7?", a: "5", options: ["3", "5", "6", "7"]},
    {q: "Find the range of 15, 12, 28, 19, 10, 22.", a: "18", options: ["12", "15", "18", "28"]},
    {q: "The probability of passing an exam is 0.8. Find the probability of failing.", a: "0.2", options: ["0.1", "0.2", "0.5", "0.8"]},
    {q: "How many outcomes are there when two fair coins are tossed?", a: "4", options: ["2", "4", "6", "8"]},
    {q: "Find the mean deviation of 2, 4, 6.", a: "1.33", options: ["1.0", "1.33", "2.0", "4.0"]},
    {q: "In a class of 30, 18 are girls. What is the probability that a student chosen is a boy?", a: "2/5", options: ["1/5", "2/5", "3/5", "4/5"]},
    {q: "The scores of 5 students are 40, 50, 60, 70, 80. Find the mean score.", a: "60", options: ["50", "60", "70", "80"]},
    {q: "Calculate the variance of 5, 5, 5, 5.", a: "0", options: ["0", "5", "25", "1"]},
    {q: "If the probability of an event is 1, the event is?", a: "Certain", options: ["Impossible", "Unlikely", "Certain", "Possible"]},
    {q: "Find the geometric mean of 4 and 9.", a: "6", options: ["5", "6", "6.5", "13"]},
    {q: "A die is rolled once. Find the probability of getting a number greater than 4.", a: "1/3", options: ["1/6", "1/3", "1/2", "2/3"]},
    {q: "The marks of 10 students are: 3,4,4,5,5,5,6,7,8,9. Find the modal mark.", a: "5", options: ["4", "5", "6", "7"]}
  ],
  
"Chemi": [
    // --- ENERGETICS & EQUILIBRIUM ---
    {q: "A reaction is spontaneous if its Gibbs Free Energy (ΔG) is:", a: "Negative", options: ["Positive", "Negative", "Zero", "Infinite"]},
    {q: "What is the unit of the rate constant for a first-order reaction?", a: "s⁻¹", options: ["mol dm⁻³ s⁻¹", "dm³ mol⁻¹ s⁻¹", "s⁻¹", "mol⁻¹ s⁻¹"]},
    {q: "If the temperature of an exothermic reaction at equilibrium is increased, the yield of the product:", a: "Decreases", options: ["Increases", "Decreases", "Remains the same", "First increases then decreases"]},
  // --- NUCLEAR & RADIOACTIVITY ---
  {q: "A radioactive element has a half-life of 20 years. What fraction of the original sample will remain after 80 years?", a: "1/16", options: ["1/4", "1/8", "1/16", "1/32"]},
  {q: "In the nuclear reaction: ²³⁸₉₂U → ²³⁴₉₀Th + X, what is particle X?", a: "Alpha particle", options: ["Alpha particle", "Beta particle", "Gamma ray", "Neutron"]},
  {q: "Which type of radiation has the highest ionizing power but the lowest penetrating power?", a: "Alpha particles", options: ["Alpha particles", "Beta particles", "Gamma rays", "X-rays"]},

  // --- ELECTROCHEMISTRY & STOICHIOMETRY ---
  {q: "How many faradays of electricity are required to liberate 9g of Aluminium? [Al=27, F=96500C]", a: "1.0 F", options: ["0.33 F", "1.0 F", "3.0 F", "9.0 F"]},
  {q: "Calculate the mass of copper deposited by a current of 2.0A flowing for 1 hour. [Cu=64, F=96500]", a: "2.39g", options: ["1.19g", "2.39g", "4.78g", "9.56g"]},
  {q: "Calculate the E° cell for: Zn | Zn²⁺ || Cu²⁺ | Cu, given E° Zn²⁺/Zn = -0.76V and E° Cu²⁺/Cu = +0.34V.", a: "+1.10 V", options: ["-1.10 V", "+0.42 V", "-0.42 V", "+1.10 V"]},
  

  // --- THERMODYNAMICS & EQUILIBRIUM ---
  {q: "Calculate the Gibbs free energy change (ΔG) for a reaction where ΔH = -120 kJ, ΔS = -0.15 kJ/K, and T = 300K.", a: "-75 kJ", options: ["-75 kJ", "-165 kJ", "+75 kJ", "+165 kJ"]},
  {q: "For the reaction PCl₅(g) ⇌ PCl₃(g) + Cl₂(g), if equilibrium concentrations are [PCl₅]=0.05, [PCl₃]=0.15, [Cl₂]=0.10 mol/dm³, find Kc.", a: "0.30", options: ["0.03", "0.30", "3.00", "3.33"]},
  {q: "A reaction is spontaneous at all temperatures only when:", a: "ΔH is negative and ΔS is positive", options: ["ΔH is positive and ΔS is negative", "ΔH is negative and ΔS is positive", "Both negative", "Both positive"]},

  // --- ORGANIC QUALITATIVE ANALYSIS ---
  {q: "Which compound does not reduce Fehling's solution but forms a yellow precipitate with iodine in NaOH?", a: "Propanone", options: ["Propanal", "Propan-1-ol", "Propanone", "Ethoxyethane"]},
  {q: "The reagent used to distinguish between an alkyne and an alkene is:", a: "Ammoniacal Copper(I) Chloride", options: ["Bromine water", "Acidified KMnO₄", "Ammoniacal Copper(I) Chloride", "Fehling's solution"]},
  {q: "The hybridization of the carbon atom in ethyne (C₂H₂) is:", a: "sp", options: ["sp", "sp²", "sp³", "dsp²"]},
  

  // --- ACIDS, BASES & SALTS ---
  {q: "Which of the following salts will undergo hydrolysis in water to produce an acidic solution?", a: "NH₄Cl", options: ["NaCl", "K₂CO₃", "NH₄Cl", "CH₃COONa"]},
  {q: "What is the pH of a solution containing 0.05 mol/dm³ of tetraoxosulphate(VI) acid?", a: "1.0", options: ["0.05", "1.0", "1.3", "2.0"]},
    // --- DESCRIPTIVE INORGANIC ---
    {q: "Which gas is used in the manufacturing of nitrogenous fertilizers?", a: "Ammonia", options: ["Nitrogen", "Ammonia", "Nitrogen(IV) oxide", "Nitric acid"]},
    {q: "The shape of the methane molecule is:", a: "Tetrahedral", options: ["Linear", "Planar", "Tetrahedral", "Pyramidal"]},
    
    {q: "Which of the following is the most reactive halogen?", a: "Fluorine", options: ["Fluorine", "Chlorine", "Bromine", "Iodine"]},
    {q: "Hard water can be softened by the addition of:", a: "Washing soda", options: ["Common salt", "Epsom salt", "Washing soda", "Baking soda"]},
    {q: "The gas that gives a black precipitate with lead(II) ethanoate paper is:", a: "H₂S", options: ["SO₂", "CO₂", "H₂S", "Cl₂"]},
    {q: "Which of the following oxides is acidic?", a: "SO₂", options: ["Na₂O", "MgO", "Al₂O3", "SO₂"]},
    {q: "What is the color of Nitrogen(IV) oxide gas?", a: "Reddish-brown", options: ["Colorless", "Pale green", "Reddish-brown", "Deep blue"]},
    {q: "The chief ore of Zinc is:", a: "Zinc blende", options: ["Bauxite", "Zinc blende", "Hematite", "Cassiterite"]},
    {q: "Which of the following is a member of the Halogen family?", a: "Iodine", options: ["Sodium", "Iodine", "Magnesium", "Neon"]},
    {q: "The most electronegative element is?", a: "Fluorine", options: ["Oxygen", "Chlorine", "Fluorine", "Nitrogen"]},
    {q: "Brass is an alloy of?", a: "Copper and Zinc", options: ["Copper and Tin", "Copper and Zinc", "Iron and Carbon", "Lead and Tin"]},
    {q: "Which of the following is used in the manufacture of glass?", a: "Silica", options: ["Silica", "Sodium", "Calcium", "Sulphur"]},
    {q: "The chief ore of Aluminium is?", a: "Bauxite", options: ["Hematite", "Cassiterite", "Bauxite", "Galena"]},
    {q: "Which of the following is a liquid at room temperature?", a: "Bromine", options: ["Iodine", "Bromine", "Chlorine", "Fluorine"]},
    {q: "The process by which iron is coated with zinc to prevent rusting is?", a: "Galvanization", options: ["Electroplating", "Galvanization", "Alloying", "Tin-plating"]},
    {q: "Which gas is used in filling light bulbs?", a: "Argon", options: ["Oxygen", "Hydrogen", "Argon", "Chlorine"]},
    {q: "The most reactive metal in the reactivity series is?", a: "Potassium", options: ["Sodium", "Potassium", "Calcium", "Gold"]},
    {q: "Which of the following is a bleach?", a: "NaClO", options: ["NaOH", "NaCl", "NaClO", "HCl"]},
    {q: "The acid found in a car battery is?", a: "H2SO4", options: ["HCl", "HNO3", "H2SO4", "CH3COOH"]},
    {q: "Which of the following is used as a lubricant in engines?", a: "Graphite", options: ["Diamond", "Graphite", "Sulphur", "Phosphorus"]},
    {q: "The standard electrode potential is measured at?", a: "298 K", options: ["273 K", "298 K", "373 K", "500 K"]},
    {q: "Which of the following is a noble gas?", a: "Neon", options: ["Nitrogen", "Oxygen", "Neon", "Fluorine"]},
    {q: "The hardness of a diamond is due to?", a: "Giant covalent structure", options: ["Ionic bonds", "Metallic bonds", "Giant covalent structure", "Van der Waals forces"]},
    {q: "Which of the following is a drying agent?", a: "CaO", options: ["H2O", "CaO", "NaCl", "KNO3"]},
    {q: "The molar mass of H2O is? (H=1, O=16)", a: "18", options: ["16", "17", "18", "20"]},
    {q: "Which gas turns lime water milky?", a: "CO2", options: ["O2", "H2", "CO2", "N2"]},
    {q: "Which of the following is an example of an emulsion?", a: "Milk", options: ["Air", "Milk", "Steel", "Smoke"]},
    {q: "The catalyst used in the Contact process is?", a: "V2O5", options: ["Iron", "Platinum", "V2O5", "Nickel"]}
  ],
  "Maths": [
    // --- ADDITIONAL TOPICS: LOGIC, VECTORS & SETS ---
    {q: "Which of the following is a null set?", a: "The set of even prime numbers greater than 2", options: ["The set of even prime numbers", "The set of even prime numbers greater than 2", "The set of odd numbers", "The set of points on a line"]},
    {q: "If P = {1, 2, 3, 4} and Q = {2, 4, 6}, find P ∪ Q.", a: "{1, 2, 3, 4, 6}", options: ["{2, 4}", "{1, 2, 3, 4, 6}", "{1, 3, 6}", "{1, 2, 3, 4}"]},
    {q: "A boy moves 3km North and then 4km East. Find his displacement from the starting point.", a: "5km", options: ["1km", "5km", "7km", "12km"]},
    {q: "Simplify: (x - 2) / (x² - 4)", a: "1 / (x + 2)", options: ["x + 2", "1 / (x + 2)", "x - 2", "1 / (x - 2)"]},
    {q: "The gradient of a horizontal line is?", a: "0", options: ["0", "1", "Infinity", "-1"]},
    {q: "Find the value of 'x' in the sequence: 1, 4, 9, x, 25.", a: "16", options: ["12", "16", "20", "24"]},
    {q: "If tan θ = 3/4, find cos θ.", a: "4/5", options: ["3/5", "4/5", "5/4", "1"]},
    {q: "A bag contains 10 items. 3 are defective. If one is picked, what is the probability it is NOT defective?", a: "0.7", options: ["0.3", "0.5", "0.7", "1.0"]},
    {q: "Find the 5th term of (x + y)⁶.", a: "15x²y⁴", options: ["6x⁵y", "15x⁴y²", "20x³y³", "15x²y⁴"]},
    {q: "What is the result of log₅(1)?", a: "0", options: ["0", "1", "5", "Undefined"]},

    // --- MENSURATION & COORDINATES ---
    {q: "Find the equation of a line with gradient -3 passing through (0, 4).", a: "y = -3x + 4", options: ["y = 3x + 4", "y = -3x + 4", "y = -3x - 4", "y = x - 3"]},
    {q: "The diameter of a circle is 20cm. Find its area in terms of π.", a: "100π", options: ["10π", "20π", "100π", "400π"]},
    {q: "The surface area of a sphere is 616cm². Find its radius. (π = 22/7)", a: "7cm", options: ["3.5cm", "7cm", "14cm", "21cm"]},
    {q: "Find the midpoint between A(-2, 3) and B(4, 5).", a: "(1, 4)", options: ["(1, 4)", "(3, 1)", "(2, 8)", "(6, 2)"]},
    {q: "Calculate the perimeter of a sector of radius 7cm and angle 60°.", a: "21.33cm", options: ["7.33cm", "14.33cm", "21.33cm", "28cm"]},
    {q: "A cylindrical tank has capacity 1540m³ and radius 7m. Find its height.", a: "10m", options: ["5m", "10m", "15m", "20m"]},
    {q: "In a right-angled triangle, if θ = 45°, then sin θ is equal to?", a: "1/√2", options: ["1/2", "√3/2", "1/√2", "1"]},
    {q: "What is the mode of the following: 5, 2, 8, 5, 3, 5, 9?", a: "5", options: ["2", "3", "5", "9"]},
    {q: "Find the range of 102, 105, 108, 110, 101.", a: "9", options: ["5", "8", "9", "10"]},
    {q: "Solve: 2^(2x) = 16", a: "2", options: ["2", "4", "8", "16"]},
    {q: "What is the sum of the angles in a triangle?", a: "180°", options: ["90°", "180°", "270°", "360°"]},
    {q: "Find the area of a parallelogram with base 8cm and vertical height 5cm.", a: "40cm²", options: ["13cm²", "20cm²", "40cm²", "80cm²"]},
    {q: "Convert 0.333... to a fraction.", a: "1/3", options: ["1/2", "1/3", "1/4", "3/10"]},
    {q: "Simplify: √72 / √2", a: "6", options: ["3", "6", "12", "36"]},
    {q: "If 5x = 20, what is 2x + 1?", a: "9", options: ["5", "9", "11", "21"]},
    {q: "What is the value of pi (π) correct to 2 decimal places?", a: "3.14", options: ["3.12", "3.14", "3.16", "3.22"]},
    // --- ORGANIC & EXPERIMENTAL ---
    {q: "Which of the following is a primary alkanol?", a: "Ethanol", options: ["Ethanol", "Propan-2-ol", "2-methylpropan-2-ol", "Butan-2-ol"]},
    {q: "The reaction of an ester with a base to form soap is?", a: "Saponification", options: ["Esterification", "Saponification", "Neutralization", "Oxidation"]},
    {q: "What is the general formula for Alkanoic Acids?", a: "CnH2n+1COOH", options: ["CnH2n+2", "CnH2n+1OH", "CnH2n+1COOH", "CnH2n"]},
    {q: "Which reagent is used to test for unsaturation in alkenes?", a: "Bromine water", options: ["Limewater", "Bromine water", "Fehling's solution", "Litmus paper"]},
    {q: "The functional group in Alkanals (Aldehydes) is?", a: "-CHO", options: ["-OH", "-CHO", "-CO-", "-COOH"]},
    {q: "What is the gas produced when calcium carbide reacts with water?", a: "Ethyne", options: ["Methane", "Ethene", "Ethyne", "Propane"]},
    {q: "Which of these is a thermoplastic?", a: "Polythene", options: ["Polythene", "Bakelite", "Melamine", "Vulcanized rubber"]},
    {q: "The boiling point of alkanes increases with?", a: "Molecular mass", options: ["Molecular mass", "Solubility", "Branching", "Pressure only"]},
    {q: "Which isomer of C₄H₁₀ is branched?", a: "2-methylpropane", options: ["n-butane", "2-methylpropane", "Cyclobutane", "But-1-ene"]},
    {q: "The main source of alkanes is?", a: "Petroleum", options: ["Coal", "Petroleum", "Air", "Water"]},

    // --- PERIODIC TABLE & KINETICS ---
    {q: "Which element has the electron configuration 2, 8, 2?", a: "Magnesium", options: ["Sodium", "Magnesium", "Aluminium", "Calcium"]},
    {q: "The vertical columns in the periodic table are called?", a: "Groups", options: ["Periods", "Groups", "Series", "Rows"]},
    {q: "What is the common name for Group 17 elements?", a: "Halogens", options: ["Alkali metals", "Noble gases", "Halogens", "Chalcogens"]},
    {q: "A reaction that releases heat to the surroundings is?", a: "Exothermic", options: ["Endothermic", "Exothermic", "Isothermic", "Adiabatic"]},
    {q: "Which of the following increases the rate of reaction?", a: "Increasing surface area", options: ["Decreasing concentration", "Decreasing temperature", "Increasing surface area", "Using a smaller container"]},
    {q: "What is the unit of molarity?", a: "mol/dm³", options: ["g/cm³", "mol/dm³", "mol/g", "kg/m³"]},
    {q: "The energy required to start a chemical reaction is?", a: "Activation energy", options: ["Kinetic energy", "Activation energy", "Potential energy", "Bond energy"]},
    {q: "Which subatomic particle is involved in chemical bonding?", a: "Electron", options: ["Proton", "Neutron", "Electron", "Nucleus"]},
    {q: "What is the mass of one mole of Carbon-12?", a: "12g", options: ["1g", "6g", "12g", "24g"]},
    {q: "A solution with a pH of 7 is?", a: "Neutral", options: ["Acidic", "Basic", "Neutral", "Amphoteric"]},

    // --- METALS & ENVIRONMENTS ---
    {q: "Which metal is liquid at room temperature?", a: "Mercury", options: ["Sodium", "Mercury", "Iron", "Gold"]},
    {q: "The oxidation of iron in the presence of air and water is?", a: "Rusting", options: ["Galvanization", "Rusting", "Cracking", "Saponification"]},
    {q: "Which of these is an isotope of Hydrogen?", a: "Deuterium", options: ["Deuterium", "Helium", "Lithium", "Neon"]},
    {q: "The most abundant element in the Earth's crust is?", a: "Oxygen", options: ["Silicon", "Aluminium", "Oxygen", "Iron"]},
    {q: "Which gas is used to extinguish fires?", a: "CO₂", options: ["O₂", "CO₂", "H₂", "N₂"]},
    {q: "The main ore of iron is?", a: "Hematite", options: ["Bauxite", "Hematite", "Galena", "Cassiterite"]},
    {q: "Which chemical bond involves the transfer of electrons?", a: "Ionic", options: ["Ionic", "Covalent", "Dative", "Metallic"]},
    {q: "What is the chemical name for common salt?", a: "Sodium Chloride", options: ["Sodium Carbonate", "Sodium Chloride", "Sodium Sulphate", "Potassium Chloride"]},
    {q: "The process of a solid turning directly into a gas is?", a: "Sublimation", options: ["Evaporation", "Sublimation", "Condensation", "Fusion"]},
    {q: "Which acid is found in vinegar?", a: "Ethanoic acid", options: ["Methanoic acid", "Ethanoic acid", "Hydrochloric acid", "Citric acid"]}
  ],
  "Chemistry": [
    // --- ORGANIC CHEMISTRY (20 Questions) ---
    {q: "Which of the following is the general formula for Alkanols?", a: "CnH2n+1OH", options: ["CnH2n+2", "CnH2n+1OH", "CnH2nO2", "CnH2n"]},
    {q: "The reaction between an alkanoic acid and an alkanol is known as?", a: "Esterification", options: ["Saponification", "Esterification", "Hydrolysis", "Polymerization"]},
    {q: "What is the IUPAC name for CH3COOCH2CH3?", a: "Ethyl ethanoate", options: ["Methyl propanoate", "Ethyl ethanoate", "Propyl methanoate", "Methyl ethanoate"]},
    {q: "Which of the following compounds will give a brick-red precipitate with Fehling's solution?", a: "Ethanal", options: ["Ethane", "Ethanal", "Ethanoic acid", "Propanone"]},
    {q: "The primary product of the fermentation of sugar is?", a: "Ethanol", options: ["Methanol", "Ethanol", "Ethanoic acid", "Glucose"]},
    {q: "Which hydrocarbon is used in oxy-acetylene flames for welding?", a: "Ethyne", options: ["Methane", "Ethene", "Ethyne", "Propane"]},
    {q: "The natural rubber is a polymer of?", a: "Isoprene", options: ["Ethene", "Isoprene", "Styrene", "Butadiene"]},
    {q: "Which of the following is a saturated hydrocarbon?", a: "C4H10", options: ["C2H2", "C3H6", "C4H10", "C4H8"]},
    {q: "The functional group -NH2 is characteristic of?", a: "Amines", options: ["Amides", "Amines", "Nitro compounds", "Amino acids"]},
    {q: "Vegetable oil can be converted to margarine by?", a: "Hydrogenation", options: ["Saponification", "Hydrogenation", "Oxidation", "Esterification"]},
    {q: "What is the molecular formula of Benzene?", a: "C6H6", options: ["C6H12", "C6H14", "C6H6", "C5H5"]},
    {q: "Which of these is used as a domestic fuel?", a: "Butane", options: ["Methane", "Ethane", "Butane", "Octane"]},
    {q: "The prefix 'prop-' in IUPAC nomenclature represents how many carbon atoms?", a: "3", options: ["1", "2", "3", "4"]},
    {q: "Which of the following is a synthetic polymer?", a: "Nylon", options: ["Starch", "Cellulose", "Nylon", "Silk"]},
    {q: "The characteristic smell of rotten eggs is associated with?", a: "H2S", options: ["SO2", "NH3", "H2S", "Cl2"]},
    {q: "Which of the following is an isomer of Butane?", a: "2-methylpropane", options: ["Pentane", "2-methylpropane", "Cyclobutane", "Methylbutane"]},
    {q: "The conversion of glucose to ethanol is catalyzed by?", a: "Zymase", options: ["Diastase", "Maltase", "Zymase", "Invertase"]},
    {q: "What is the major product of the reaction between ethene and bromine?", a: "1,2-dibromoethane", options: ["Bromoethane", "1,2-dibromoethane", "1,1-dibromoethane", "Tribromoethane"]},
    {q: "Which organic compound is used as a preservative for biological specimens?", a: "Methanal", options: ["Ethanol", "Methanal", "Ethanoic acid", "Acetone"]},
    {q: "The solubility of alkanols in water decreases as?", a: "Carbon chain increases", options: ["Carbon chain decreases", "Carbon chain increases", "Temperature increases", "Pressure decreases"]},

    // --- PHYSICAL & INORGANIC CHEMISTRY (20 Questions) ---
    {q: "What is the shape of a water molecule?", a: "V-shaped (Bent)", options: ["Linear", "V-shaped (Bent)", "Tetrahedral", "Trigonal"]},
    {q: "The bond formed by the sharing of electrons is called?", a: "Covalent bond", options: ["Ionic bond", "Covalent bond", "Dative bond", "Metallic bond"]},
    {q: "What is the volume of 1 mole of an ideal gas at s.t.p.?", a: "22.4 dm3", options: ["11.2 dm3", "22.4 dm3", "44.8 dm3", "24.0 dm3"]},
    {q: "The number of electrons in the outermost shell of a Noble gas is usually?", a: "8", options: ["2", "6", "8", "18"]},
    {q: "Which of the following is a physical change?", a: "Melting of ice", options: ["Melting of ice", "Burning of wood", "Rusting of iron", "Souring of milk"]},
    {q: "The law which states that 'Matter is neither created nor destroyed' is?", a: "Law of conservation of mass", options: ["Law of constant composition", "Law of multiple proportion", "Law of conservation of mass", "Gay-Lussac's Law"]},
    {q: "Which of these particles has the least mass?", a: "Electron", options: ["Proton", "Neutron", "Electron", "Alpha particle"]},
    {q: "The radioactive isotope Cobalt-60 is used in?", a: "Cancer treatment", options: ["Dating fossils", "Cancer treatment", "Nuclear reactors", "Leaking pipes"]},
    {q: "Which of the following is a base?", a: "KOH", options: ["HCl", "H2SO4", "KOH", "HNO3"]},
    {q: "The oxidation state of Oxygen in most compounds is?", a: "-2", options: ["-1", "-2", "0", "+2"]},
    {q: "Which of the following is a transition metal?", a: "Iron", options: ["Sodium", "Calcium", "Iron", "Aluminium"]},
    {q: "The gas that relights a glowing splint is?", a: "Oxygen", options: ["Hydrogen", "Oxygen", "Nitrogen", "Chlorine"]},
    {q: "Which of the following is an amphoteric oxide?", a: "Al2O3", options: ["Na2O", "MgO", "Al2O3", "SO2"]},
    {q: "The process of losing electrons is called?", a: "Oxidation", options: ["Reduction", "Oxidation", "Neutralization", "Hydrolysis"]},
    {q: "What is the mass number of an atom with 6 protons and 7 neutrons?", a: "13", options: ["6", "7", "13", "42"]},
    {q: "Which indicator is suitable for a strong acid-weak base titration?", a: "Methyl orange", options: ["Phenolphthalein", "Methyl orange", "Litmus", "Bromothymol blue"]},
    {q: "The solubility of most solids in water increases with?", a: "Temperature", options: ["Pressure", "Temperature", "Stirring", "Surface area"]},
    {q: "Which of these gases is responsible for the greenhouse effect?", a: "Carbon dioxide", options: ["Oxygen", "Nitrogen", "Carbon dioxide", "Helium"]},
    {q: "What is the color of Chlorine gas?", a: "Greenish-yellow", options: ["Colorless", "Reddish-brown", "Greenish-yellow", "Deep blue"]},
    {q: "The boiling point of water is 100°C. What is this in Kelvin?", a: "373 K", options: ["100 K", "273 K", "373 K", "400 K"]},
    // --- ELECTROCHEMISTRY & REDOX ---
    {q: "How many faradays of electricity are required to liberate 9g of Aluminium? [Al=27, F=96500C]", a: "1.0 F", options: ["0.33 F", "1.0 F", "3.0 F", "9.0 F"]},
    {q: "In the reaction: MnO₂ + 4HCl → MnCl₂ + 2H₂O + Cl₂, which substance is the oxidizing agent?", a: "MnO₂", options: ["MnO₂", "HCl", "MnCl₂", "Cl₂"]},
    {q: "What is the oxidation number of phosphorus in H₃PO₄?", a: "+5", options: ["+1", "+3", "+5", "+7"]},
    {q: "During the electrolysis of CuSO₄(aq) using copper electrodes, the mass of the cathode:", a: "Increases", options: ["Decreases", "Increases", "Remains constant", "First increases then decreases"]},
    {q: "Which of the following will be discharged first at the cathode during electrolysis of a brine solution?", a: "H⁺", options: ["Na⁺", "H⁺", "OH⁻", "Cl⁻"]},

    // --- ORGANIC CHEMISTRY (ADVANCED) ---
    {q: "What is the IUPAC name for the product formed when propene reacts with HBr?", a: "2-bromopropane", options: ["1-bromopropane", "2-bromopropane", "1,2-dibromopropane", "Bromopropane"]},
    {q: "Which of these polymers is formed via condensation polymerization?", a: "Nylon", options: ["Polythene", "PVC", "Polystyrene", "Nylon"]},
    {q: "The structural formula for 2,2-dimethylbutane contains how many quaternary carbon atoms?", a: "1", options: ["1", "2", "3", "4"]},
    {q: "Which of the following organic compounds will NOT react with metallic sodium?", a: "Ethoxyethane", options: ["Ethanol", "Ethanoic acid", "Ethoxyethane", "Propan-1-ol"]},
    {q: "What reagent is used to convert nitrobenzene to aniline?", a: "Sn / conc. HCl", options: ["LiAlH₄", "Sn / conc. HCl", "H₂ / Pt", "KMnO₄ / H⁺"]},
    // --- RADIOACTIVITY & NUCLEAR CHEMISTRY ---
    {q: "A radioactive element has a half-life of 20 years. What fraction of the original sample will remain after 80 years?", a: "1/16", options: ["1/4", "1/8", "1/16", "1/32"]},
    {q: "In the nuclear reaction: ²³⁸₉₂U → ²³⁴₉₀Th + X, what is particle X?", a: "Alpha particle", options: ["Alpha particle", "Beta particle", "Gamma ray", "Neutron"]},
    
    {q: "The time taken for the activity of a radioactive isotope to fall to half its initial value is called?", a: "Half-life", options: ["Decay constant", "Half-life", "Mean life", "Activity period"]},

    // --- SALTS, ACIDS & BASES (COMPLEX) ---
    {q: "Which of the following salts will undergo hydrolysis in water to produce an acidic solution?", a: "NH₄Cl", options: ["NaCl", "K₂CO₃", "NH₄Cl", "CH₃COONa"]},
    {q: "Calculate the volume of 0.2 mol/dm³ HCl required to neutralize 25cm³ of 0.1 mol/dm³ NaOH.", a: "12.5 cm³", options: ["12.5 cm³", "25.0 cm³", "50.0 cm³", "75.0 cm³"]},
    {q: "Which of the following indicators is most suitable for a titration between ethanoic acid and sodium hydroxide?", a: "Phenolphthalein", options: ["Methyl orange", "Phenolphthalein", "Methyl red", "Litmus"]},
    

    // --- ORGANIC ANALYSIS & QUALITATIVE ---
    {q: "Which of the following compounds will react with ammoniacal silver trioxonitrate(V) to give a silver mirror?", a: "Ethanal", options: ["Ethanol", "Ethanal", "Ethanoic acid", "Ethyl ethanoate"]},
    {q: "The reagent used to distinguish between an alkyne and an alkene is:", a: "Ammoniacal Copper(I) Chloride", options: ["Bromine water", "Acidified KMnO₄", "Ammoniacal Copper(I) Chloride", "Fehling's solution"]},
    {q: "What is the product of the reaction between propan-2-ol and acidified K₂Cr₂O₇?", a: "Propanone", options: ["Propanal", "Propanone", "Propanoic acid", "Propane"]},

    // --- METALLURGY & INDUSTRIAL ---
    {q: "In the extraction of iron, the function of limestone (CaCO₃) in the blast furnace is to:", a: "Remove silicate impurities as slag", options: ["Act as a reducing agent", "Remove silicate impurities as slag", "Act as a fuel", "Lower the melting point of iron"]},

    {q: "Which of the following is the composition of the alloy 'Duralumin'?", a: "Al, Cu, Mg, Mn", options: ["Al, Cu, Zn", "Al, Cu, Mg, Mn", "Cu, Zn, Sn", "Pb, Sn, Sb"]},
    // --- STOICHIOMETRY & QUANTITATIVE ---
    {q: "What is the percentage by mass of water in CuSO₄.5H₂O? [Cu=64, S=32, O=16, H=1]", a: "36%", options: ["10%", "25%", "36%", "45%"]},
    {q: "Calculate the concentration in mol/dm³ of a solution containing 2g of NaOH in 250cm³. [Na=23, O=16, H=1]", a: "0.2 mol/dm³", options: ["0.05 mol/dm³", "0.1 mol/dm³", "0.2 mol/dm³", "0.5 mol/dm³"]},
    {q: "How many moles of hydrogen atoms are present in 2 moles of (NH₄)₂SO₄?", a: "16", options: ["4", "8", "12", "16"]},
    {q: "What mass of CO₂ is produced by the complete combustion of 12g of Carbon? [C=12, O=16]", a: "44g", options: ["12g", "28g", "44g", "56g"]}
  ],
};