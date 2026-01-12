import type { Module, TrackInfo } from '../types';

export const tracks: TrackInfo[] = [
  {
    id: 'child',
    name: 'Explorer',
    description: 'For curious young minds (8 years old)',
    icon: '🚀',
  },
  {
    id: 'lifelong-learner',
    name: 'Learner',
    description: 'For curious adults exploring mathematics',
    icon: '📚',
  },
  {
    id: 'ap-student',
    name: 'Advanced',
    description: 'For advanced high school students',
    icon: '🎓',
  },
];

export const modules: Module[] = [
  {
    id: 'polynomials',
    number: 1,
    title: 'The World of Polynomials',
    shortDescription: 'Understanding equations and their solutions',
    content: {
      'child': {
        title: 'Number Puzzles',
        introduction: 'Have you ever played a guessing game where someone picks a number and you have to figure out what it is? Math has puzzles like that too! They\'re called equations, and today we\'ll learn how to solve some fun number puzzles.',
        sections: [
          {
            title: 'What is a Number Puzzle?',
            content: 'Imagine I\'m thinking of a number. If I add 3 to my number, I get 7. Can you figure out what my number is? That\'s right - it\'s 4! We can write this puzzle as: x + 3 = 7, where x is the mystery number.',
            example: 'Try this: If x + 5 = 12, what is x? The answer is 7!',
          },
          {
            title: 'Bigger Puzzles',
            content: 'Some puzzles are trickier. What if I said: "My number times itself equals 9"? This means x × x = 9. Can you think of a number that works? Yes, 3 works (because 3 × 3 = 9). But wait - (-3) × (-3) = 9 too! Some puzzles have more than one answer.',
            visualType: 'polynomial-roots',
            example: 'When we multiply a number by itself, like 3 × 3, we call this "squaring" the number. We write it as 3².',
          },
          {
            title: 'The Magic of Finding Answers',
            content: 'Finding the answers to these puzzles is like being a detective. Sometimes the answers are easy to find, and sometimes they\'re hidden! A long time ago, mathematicians discovered clever tricks to find answers to harder and harder puzzles.',
          },
        ],
        quiz: [
          {
            id: 'q1',
            question: 'If x + 4 = 10, what is x?',
            options: ['4', '6', '14', '10'],
            correctIndex: 1,
            explanation: 'If we take away 4 from both sides: x = 10 - 4 = 6',
          },
          {
            id: 'q2',
            question: 'What number times itself equals 16?',
            options: ['2', '8', '4', '16'],
            correctIndex: 2,
            explanation: '4 × 4 = 16, so x = 4 (and also -4 works!)',
          },
          {
            id: 'q3',
            question: 'How many answers does x × x = 25 have?',
            options: ['One answer', 'Two answers', 'No answers', 'Three answers'],
            correctIndex: 1,
            explanation: 'Both 5 and -5 work, because 5 × 5 = 25 and (-5) × (-5) = 25',
          },
        ],
      },
      'lifelong-learner': {
        title: 'Understanding Polynomials',
        introduction: 'Polynomials are mathematical expressions that appear everywhere in our world, from calculating compound interest to describing the path of a thrown ball. Let\'s explore what they are and why mathematicians have been fascinated by them for centuries.',
        sections: [
          {
            title: 'What Are Polynomials?',
            content: 'A polynomial is an expression made up of variables and numbers, combined using addition, subtraction, and multiplication. For example, x² - 5x + 6 is a polynomial. The highest power of x tells us the "degree" of the polynomial - this one has degree 2 (a quadratic).',
            example: 'Linear (degree 1): 2x + 3\nQuadratic (degree 2): x² - 4\nCubic (degree 3): x³ + 2x² - x + 5',
          },
          {
            title: 'Roots: Where Polynomials Equal Zero',
            content: 'The "roots" or "zeros" of a polynomial are the values of x that make the polynomial equal zero. Finding roots is like solving a puzzle - you\'re searching for special numbers that perfectly balance the equation.',
            visualType: 'polynomial-roots',
            example: 'For x² - 5x + 6 = 0, the roots are x = 2 and x = 3\nCheck: 2² - 5(2) + 6 = 4 - 10 + 6 = 0 ✓',
          },
          {
            title: 'The Quest for Formulas',
            content: 'For thousands of years, mathematicians sought formulas to find polynomial roots. The quadratic formula (for degree 2) has been known since ancient Babylon. Formulas for degree 3 and 4 were discovered in the 1500s. But degree 5 and higher? That\'s where our story gets interesting...',
          },
          {
            title: 'Why This Matters',
            content: 'The search for polynomial solutions led to some of the most beautiful mathematics ever discovered. A young French mathematician named Évariste Galois, working in the early 1800s, would crack this puzzle in a completely unexpected way.',
          },
        ],
        quiz: [
          {
            id: 'q1',
            question: 'What is the degree of the polynomial x³ - 2x² + x - 7?',
            options: ['1', '2', '3', '7'],
            correctIndex: 2,
            explanation: 'The degree is the highest power of x, which is 3.',
          },
          {
            id: 'q2',
            question: 'If x = 3 is a root of x² - 5x + 6, what does this mean?',
            options: ['3² - 5(3) + 6 = 0', '3 is the only solution', 'The polynomial has degree 3', 'x equals 3 always'],
            correctIndex: 0,
            explanation: 'A root makes the polynomial equal zero: 9 - 15 + 6 = 0 ✓',
          },
          {
            id: 'q3',
            question: 'Formulas exist for finding roots of polynomials up to what degree?',
            options: ['Degree 2 only', 'Degree 3 only', 'Degree 4', 'All degrees'],
            correctIndex: 2,
            explanation: 'General formulas using radicals exist for degrees 1-4, but not for degree 5 and higher.',
          },
        ],
      },
      'ap-student': {
        title: 'Polynomial Equations and Solvability',
        introduction: 'Polynomial equations form the foundation of algebra. Understanding their structure and solutions is essential before exploring Galois theory. We\'ll examine the relationship between polynomials and their roots, setting the stage for deeper algebraic concepts.',
        sections: [
          {
            title: 'Formal Definition of Polynomials',
            content: 'A polynomial over a field F is an expression of the form f(x) = aₙxⁿ + aₙ₋₁xⁿ⁻¹ + ... + a₁x + a₀, where aᵢ ∈ F. The degree of f is n if aₙ ≠ 0. We denote the ring of polynomials over F as F[x].',
            example: 'Over ℚ: f(x) = x⁴ - 10x² + 1 ∈ ℚ[x]\nOver ℝ: g(x) = √2x³ - πx + e ∈ ℝ[x]',
          },
          {
            title: 'The Fundamental Theorem of Algebra',
            content: 'Every non-constant polynomial with complex coefficients has at least one complex root. Consequently, a polynomial of degree n has exactly n roots in ℂ (counting multiplicity). This theorem, proved by Gauss, ensures that ℂ is algebraically closed.',
            visualType: 'polynomial-roots',
          },
          {
            title: 'Solvability by Radicals',
            content: 'A polynomial is "solvable by radicals" if its roots can be expressed using only the field operations (+, -, ×, ÷) and extraction of nth roots (ⁿ√). The quadratic formula x = (-b ± √(b²-4ac))/2a demonstrates this for degree 2.',
            example: 'Cardano\'s formula for x³ + px + q = 0:\nx = ∛(-q/2 + √(q²/4 + p³/27)) + ∛(-q/2 - √(q²/4 + p³/27))',
          },
          {
            title: 'The Abel-Ruffini Theorem',
            content: 'In 1824, Abel proved that there is no general algebraic formula for solving polynomial equations of degree 5 or higher. However, this doesn\'t mean specific quintics can\'t be solved - it means no universal formula exists. Galois\'s breakthrough explained exactly which polynomials are solvable.',
          },
        ],
        quiz: [
          {
            id: 'q1',
            question: 'What does it mean for a polynomial to be "solvable by radicals"?',
            options: [
              'It has real roots only',
              'Its roots can be expressed using +, -, ×, ÷ and nth roots',
              'It can be factored over ℤ',
              'It has exactly n distinct roots',
            ],
            correctIndex: 1,
            explanation: 'Solvability by radicals means roots are expressible using field operations and root extraction.',
          },
          {
            id: 'q2',
            question: 'According to the Fundamental Theorem of Algebra, how many roots does x⁵ - 3x³ + 2x - 1 have in ℂ?',
            options: ['3', '4', '5', 'Infinitely many'],
            correctIndex: 2,
            explanation: 'A degree-n polynomial has exactly n roots in ℂ (counting multiplicity).',
          },
          {
            id: 'q3',
            question: 'The Abel-Ruffini theorem states that:',
            options: [
              'All polynomials are solvable by radicals',
              'No polynomial of degree ≥ 5 has roots',
              'There is no general formula for degree ≥ 5',
              'Quintic polynomials have exactly 5 real roots',
            ],
            correctIndex: 2,
            explanation: 'Abel-Ruffini proves no general radical formula exists for degree 5+, though specific ones may be solvable.',
          },
        ],
      },
    },
  },
  {
    id: 'fields',
    number: 2,
    title: 'Fields and Extensions',
    shortDescription: 'Building new number systems',
    content: {
      'child': {
        title: 'Different Types of Numbers',
        introduction: 'Did you know there are different "families" of numbers? Some families are bigger than others, and they can do different things. Let\'s explore these number families!',
        sections: [
          {
            title: 'The Counting Numbers Family',
            content: 'The first numbers we learn are 1, 2, 3, 4, 5... These are great for counting things like apples or toys. But what happens if you have 3 cookies and eat 5? You can\'t use just counting numbers for that!',
            example: 'Counting numbers: 1, 2, 3, 4, 5, 6, 7, 8, 9, 10...',
          },
          {
            title: 'Making Numbers Bigger',
            content: 'So we added zero and negative numbers: ...-3, -2, -1, 0, 1, 2, 3... Now we can show "3 - 5 = -2". But what about sharing 1 pizza between 2 people? We need fractions! Each person gets ½.',
            visualType: 'field-extension',
          },
          {
            title: 'Even More Numbers!',
            content: 'What number times itself equals 2? It\'s not 1 (1×1=1) and it\'s not 2 (2×2=4). The answer is √2, a number that goes on forever without repeating! By adding special numbers like √2, we make our number family even bigger.',
            example: '√2 = 1.41421356... (it never ends or repeats!)',
          },
        ],
        quiz: [
          {
            id: 'q1',
            question: 'Why did we need to add negative numbers?',
            options: [
              'To count higher',
              'To show when we have less than zero',
              'To make math harder',
              'We don\'t need them',
            ],
            correctIndex: 1,
            explanation: 'Negative numbers help us show amounts less than zero, like owing someone 5 cookies.',
          },
          {
            id: 'q2',
            question: 'What kind of number is ½?',
            options: ['A counting number', 'A negative number', 'A fraction', 'An imaginary number'],
            correctIndex: 2,
            explanation: 'Fractions (like ½) help us describe parts of whole things.',
          },
        ],
      },
      'lifelong-learner': {
        title: 'Fields and Field Extensions',
        introduction: 'A "field" in mathematics is a set of numbers where you can add, subtract, multiply, and divide (except by zero) and always stay within that set. Field extensions are how we build bigger number systems from smaller ones.',
        sections: [
          {
            title: 'What is a Field?',
            content: 'Think of a field as a self-contained number universe. The rational numbers ℚ (all fractions) form a field: add, subtract, multiply, or divide any two fractions, and you get another fraction. The integers ℤ are NOT a field because 1÷2 isn\'t an integer.',
            example: 'Fields: ℚ (rationals), ℝ (reals), ℂ (complex numbers)\nNot fields: ℤ (integers), ℕ (natural numbers)',
          },
          {
            title: 'Extending Fields',
            content: 'Sometimes we need numbers that aren\'t in our field. √2 isn\'t rational (it\'s irrational). When we "extend" ℚ by adding √2, we get a new field ℚ(√2), containing all numbers of the form a + b√2 where a, b are rational.',
            visualType: 'field-extension',
            example: 'In ℚ(√2):\n(1 + √2) + (3 - 2√2) = 4 - √2\n(1 + √2)(1 - √2) = 1 - 2 = -1',
          },
          {
            title: 'Why Extensions Matter',
            content: 'Field extensions are the key to understanding polynomial roots. When a polynomial has no roots in a field F, we can extend F to include those roots. The structure of these extensions tells us whether the polynomial is "solvable by radicals."',
          },
          {
            title: 'A Tower of Extensions',
            content: 'We can extend fields multiple times, creating a "tower": ℚ ⊂ ℚ(√2) ⊂ ℚ(√2, √3) ⊂ ... Each step adds new numbers. The relationships between these layers are what Galois theory studies.',
          },
        ],
        quiz: [
          {
            id: 'q1',
            question: 'Why are the integers ℤ NOT a field?',
            options: [
              'You can\'t add integers',
              'Division doesn\'t always give an integer',
              'Integers include negative numbers',
              'There are too many integers',
            ],
            correctIndex: 1,
            explanation: '1÷2 = 0.5, which isn\'t an integer. Fields must be closed under division (except by 0).',
          },
          {
            id: 'q2',
            question: 'What does ℚ(√2) contain?',
            options: [
              'Only √2',
              'All real numbers',
              'Numbers of the form a + b√2 where a, b are rational',
              'Only irrational numbers',
            ],
            correctIndex: 2,
            explanation: 'ℚ(√2) is the smallest field containing both ℚ and √2, which means all combinations a + b√2.',
          },
          {
            id: 'q3',
            question: 'Field extensions help us understand:',
            options: [
              'How to count faster',
              'Which polynomials are solvable by radicals',
              'Why π is irrational',
              'Computer programming',
            ],
            correctIndex: 1,
            explanation: 'The structure of field extensions determines whether polynomial roots can be expressed with radicals.',
          },
        ],
      },
      'ap-student': {
        title: 'Field Theory Foundations',
        introduction: 'Field extensions are the algebraic structures underlying Galois theory. Understanding their construction and properties is essential for analyzing polynomial solvability.',
        sections: [
          {
            title: 'Field Axioms',
            content: 'A field (F, +, ·) is a set with two binary operations satisfying: (1) (F, +) is an abelian group with identity 0, (2) (F\\{0}, ·) is an abelian group with identity 1, and (3) multiplication distributes over addition. The characteristic of F is the smallest n > 0 with n·1 = 0, or 0 if no such n exists.',
            example: 'char(ℚ) = char(ℝ) = char(ℂ) = 0\nchar(ℤ/pℤ) = p for prime p',
          },
          {
            title: 'Algebraic Extensions',
            content: 'L/K is a field extension if K ⊆ L and both are fields. Element α ∈ L is algebraic over K if it\'s a root of some f(x) ∈ K[x]. The minimal polynomial of α is the unique monic irreducible polynomial in K[x] with α as a root. [L:K] denotes the degree of the extension.',
            visualType: 'field-extension',
            example: '√2 has minimal polynomial x² - 2 over ℚ\n[ℚ(√2):ℚ] = 2',
          },
          {
            title: 'Simple Extensions',
            content: 'K(α) is the smallest field containing K and α. If α is algebraic with minimal polynomial of degree n, then K(α) ≅ K[x]/(f(x)) and [K(α):K] = n. Every element of K(α) can be written as a₀ + a₁α + ... + aₙ₋₁αⁿ⁻¹.',
            example: 'ℚ(∛2) has basis {1, ∛2, ∛4} over ℚ\n[ℚ(∛2):ℚ] = 3',
          },
          {
            title: 'Splitting Fields',
            content: 'The splitting field of f(x) over K is the smallest extension L where f factors into linear factors. It\'s unique up to isomorphism. For f(x) = x² - 2, the splitting field over ℚ is ℚ(√2) = ℚ(-√2). Splitting fields are central to Galois theory.',
          },
        ],
        quiz: [
          {
            id: 'q1',
            question: 'If α has minimal polynomial of degree 4 over K, what is [K(α):K]?',
            options: ['1', '2', '4', 'Cannot determine'],
            correctIndex: 2,
            explanation: 'The degree of a simple extension equals the degree of the minimal polynomial.',
          },
          {
            id: 'q2',
            question: 'What is the splitting field of x² + 1 over ℝ?',
            options: ['ℝ', 'ℚ', 'ℂ', 'ℝ(π)'],
            correctIndex: 2,
            explanation: 'x² + 1 = (x - i)(x + i) splits completely in ℂ, which is the smallest such extension of ℝ.',
          },
          {
            id: 'q3',
            question: 'In ℚ(∛2), what is 1/∛2 equal to?',
            options: ['∛(1/2)', '(∛4)/2', 'Not in ℚ(∛2)', '∛2 - 1'],
            correctIndex: 1,
            explanation: '1/∛2 = ∛2·∛2/(∛2·∛2·∛2) = ∛4/2, which is in ℚ(∛2).',
          },
        ],
      },
    },
  },
  {
    id: 'symmetry',
    number: 3,
    title: 'Symmetry and Groups',
    shortDescription: 'The mathematics of patterns and transformations',
    content: {
      'child': {
        title: 'The Magic of Symmetry',
        introduction: 'Look at a butterfly\'s wings - they\'re mirror images of each other! This is called symmetry, and it\'s everywhere in nature and math. Let\'s discover the patterns hiding in symmetry.',
        sections: [
          {
            title: 'Mirror Symmetry',
            content: 'If you draw a line down the middle of a butterfly, each side looks like a reflection of the other. This is mirror symmetry! The letter A has it, but the letter F doesn\'t. Can you think of other letters with mirror symmetry?',
            example: 'Symmetric letters: A, H, M, O, T, U, V, W, X, Y\nNot symmetric: F, G, J, L, P, Q, R',
          },
          {
            title: 'Spin Symmetry',
            content: 'A pinwheel looks the same after you spin it part way around. A square looks the same if you rotate it 90°, 180°, or 270°. This is called rotational symmetry. How many ways can you turn a square and have it look the same?',
            visualType: 'symmetry-group',
            example: 'A square has 4 rotation positions\nAn equilateral triangle has 3\nA circle has infinite!',
          },
          {
            title: 'Combining Moves',
            content: 'Here\'s something cool: if you flip a shape, then flip it again, you\'re back where you started! And if you rotate a square 90°, then 90° more, that\'s the same as rotating 180° at once. Mathematicians call these "groups" of moves.',
          },
        ],
        quiz: [
          {
            id: 'q1',
            question: 'Which shape has the most rotational symmetry?',
            options: ['Square', 'Triangle', 'Rectangle', 'Circle'],
            correctIndex: 3,
            explanation: 'A circle can be rotated any amount and still looks the same - infinite symmetry!',
          },
          {
            id: 'q2',
            question: 'If you flip something twice, what happens?',
            options: ['It\'s upside down', 'It\'s back to the start', 'It disappears', 'It gets bigger'],
            correctIndex: 1,
            explanation: 'Two flips cancel each other out, bringing you back to where you started.',
          },
        ],
      },
      'lifelong-learner': {
        title: 'Groups: The Mathematics of Symmetry',
        introduction: 'Groups are one of the most powerful concepts in mathematics. They capture the essence of symmetry and transformation. Understanding groups is the key to understanding Galois theory.',
        sections: [
          {
            title: 'What is a Group?',
            content: 'A group is a collection of "moves" or transformations with three properties: (1) You can combine any two moves into a single move, (2) There\'s a "do nothing" move, and (3) Every move has an "undo" move. Think of rotating a square: you can combine rotations, do nothing (0° rotation), or undo any rotation.',
            example: 'Rotations of a square: {0°, 90°, 180°, 270°}\nCombining: 90° + 90° = 180°\nUndo: The undo of 90° is 270°',
          },
          {
            title: 'Symmetry Groups',
            content: 'The symmetries of any object form a group. An equilateral triangle has 6 symmetries: 3 rotations and 3 reflections. This group is called D₃ (dihedral group of order 3). The symmetry group captures all the ways you can transform the object and have it look the same.',
            visualType: 'symmetry-group',
          },
          {
            title: 'Permutations',
            content: 'A permutation is a rearrangement. If you have three items {A, B, C}, you can arrange them 6 ways: ABC, ACB, BAC, BCA, CAB, CBA. The group of all permutations of n objects is called Sₙ (symmetric group). S₃ has 6 elements, S₄ has 24, S₅ has 120!',
            example: 'S₃ permutations of {1,2,3}:\n123 → 123 (identity)\n123 → 213 (swap first two)\n123 → 321 (swap outer)\n...and 3 more',
          },
          {
            title: 'Why Groups Matter for Galois Theory',
            content: 'The roots of a polynomial have symmetries - ways they can be swapped while preserving algebraic relationships. These symmetries form the Galois group of the polynomial. The structure of this group determines whether the polynomial is solvable by radicals!',
          },
        ],
        quiz: [
          {
            id: 'q1',
            question: 'How many symmetries does a regular hexagon have?',
            options: ['6', '12', '3', '8'],
            correctIndex: 1,
            explanation: '6 rotations (including identity) + 6 reflections = 12 symmetries.',
          },
          {
            id: 'q2',
            question: 'How many permutations are in S₄ (permutations of 4 objects)?',
            options: ['4', '12', '24', '16'],
            correctIndex: 2,
            explanation: '|S₄| = 4! = 4 × 3 × 2 × 1 = 24',
          },
          {
            id: 'q3',
            question: 'What makes polynomial roots form a group?',
            options: [
              'They\'re all numbers',
              'They have symmetries that preserve algebraic relations',
              'There are always exactly 5 of them',
              'They\'re always real numbers',
            ],
            correctIndex: 1,
            explanation: 'The Galois group consists of permutations of roots that preserve all algebraic relationships.',
          },
        ],
      },
      'ap-student': {
        title: 'Group Theory Essentials',
        introduction: 'Group theory provides the algebraic framework for Galois theory. We\'ll cover the essential definitions and theorems needed to understand Galois groups and polynomial solvability.',
        sections: [
          {
            title: 'Group Definition and Examples',
            content: 'A group (G, ·) is a set with a binary operation satisfying: (1) Associativity: (ab)c = a(bc), (2) Identity: ∃e such that ae = ea = a, (3) Inverses: ∀a, ∃a⁻¹ such that aa⁻¹ = a⁻¹a = e. If ab = ba for all elements, G is abelian.',
            example: '(ℤ, +): abelian group, identity 0, inverse of n is -n\n(ℤ/nℤ, +): cyclic group of order n\nGL_n(ℝ): non-abelian for n ≥ 2',
          },
          {
            title: 'Subgroups and Quotients',
            content: 'H ≤ G is a subgroup if H is closed under the group operation and inverses. A normal subgroup N ⊴ G satisfies gNg⁻¹ = N for all g ∈ G. The quotient G/N forms a group when N is normal. Lagrange\'s theorem: |H| divides |G| for finite groups.',
            visualType: 'symmetry-group',
          },
          {
            title: 'The Symmetric Group Sₙ',
            content: 'Sₙ is the group of all permutations of n elements, with |Sₙ| = n!. Every permutation factors uniquely into disjoint cycles. The alternating group Aₙ ⊴ Sₙ contains even permutations (products of an even number of transpositions), with |Aₙ| = n!/2.',
            example: 'In S₄: (1 2 3)(4) · (1 4)(2 3) = (1 4 2)\nCycle type (2,2) are even, (3,1) are even\nCycle type (2,1,1) are odd transpositions',
          },
          {
            title: 'Solvable Groups',
            content: 'G is solvable if there exists a chain G = G₀ ⊵ G₁ ⊵ ... ⊵ Gₙ = {e} where each Gᵢ/Gᵢ₊₁ is abelian. Key fact: Sₙ is solvable for n ≤ 4 but not for n ≥ 5. This is the group-theoretic heart of why quintics aren\'t generally solvable by radicals.',
            example: 'S₃ is solvable: S₃ ⊵ A₃ ⊵ {e}\nA₃ ≅ ℤ/3ℤ is abelian\nS₃/A₃ ≅ ℤ/2ℤ is abelian',
          },
        ],
        quiz: [
          {
            id: 'q1',
            question: 'For which n is Sₙ solvable?',
            options: ['All n', 'n ≤ 4 only', 'n ≤ 5 only', 'Only n = 2'],
            correctIndex: 1,
            explanation: 'Sₙ is solvable for n ≤ 4. For n ≥ 5, Aₙ is simple non-abelian, making Sₙ unsolvable.',
          },
          {
            id: 'q2',
            question: 'What is |A₅|?',
            options: ['60', '120', '24', '5'],
            correctIndex: 0,
            explanation: '|A₅| = |S₅|/2 = 120/2 = 60',
          },
          {
            id: 'q3',
            question: 'Which permutation in S₃ is odd?',
            options: ['(1 2 3)', '(1 2)(3)', 'Identity', '(1 2 3)²'],
            correctIndex: 1,
            explanation: '(1 2)(3) is a single transposition, hence odd. 3-cycles are even.',
          },
        ],
      },
    },
  },
  {
    id: 'galois-groups',
    number: 4,
    title: 'Galois Groups',
    shortDescription: 'Connecting symmetry to polynomial solutions',
    content: {
      'child': {
        title: 'Secret Codes in Math',
        introduction: 'Imagine you have a secret code where you can swap letters around, but the message still makes sense. Polynomials have secret codes too - you can swap their answers around in special ways!',
        sections: [
          {
            title: 'Swapping Answers',
            content: 'Remember x² = 4 has two answers: 2 and -2? Here\'s something magical: if you swap 2 and -2 in any equation using them, the equation still works! That\'s because 2 and -2 are "twins" - they have the same mathematical relationships.',
            example: '2 + (-2) = 0 ✓\n(-2) + 2 = 0 ✓\n2 × (-2) = -4 ✓\n(-2) × 2 = -4 ✓',
          },
          {
            title: 'The Swap Detective',
            content: 'The Galois group is like a detective that finds all the allowed swaps. For x² = 4, there are two: do nothing, or swap 2 with -2. More complicated puzzles have more allowed swaps!',
            visualType: 'galois-correspondence',
          },
          {
            title: 'Why Swaps Matter',
            content: 'A brilliant mathematician named Galois (say "Gal-WAH") discovered that by studying these swaps, you can tell if a puzzle can be solved with a formula. Some puzzles have too many swaps mixed up together - those can\'t have simple formulas!',
          },
        ],
        quiz: [
          {
            id: 'q1',
            question: 'If you swap 2 and -2 in the equation 2 × (-2) = -4, what do you get?',
            options: ['4 = 4', '(-2) × 2 = -4', '0 = 0', 'The equation breaks'],
            correctIndex: 1,
            explanation: 'Swapping gives (-2) × 2 = -4, which is still true!',
          },
          {
            id: 'q2',
            question: 'Who discovered that swaps can tell us if puzzles have formulas?',
            options: ['Einstein', 'Newton', 'Galois', 'Pythagoras'],
            correctIndex: 2,
            explanation: 'Évariste Galois made this amazing discovery in the 1830s.',
          },
        ],
      },
      'lifelong-learner': {
        title: 'The Galois Group',
        introduction: 'The Galois group is the bridge between field extensions and group theory. It captures the "symmetries" of polynomial roots - the ways roots can be permuted while preserving all algebraic relationships.',
        sections: [
          {
            title: 'Automorphisms',
            content: 'An automorphism of a field L is a bijection σ: L → L that preserves addition and multiplication: σ(a+b) = σ(a)+σ(b) and σ(ab) = σ(a)σ(b). For an extension L/K, an automorphism that fixes K (σ(k) = k for all k ∈ K) is called a K-automorphism.',
            example: 'Complex conjugation z → z̄ is a ℚ-automorphism of ℂ\nIt fixes ℝ: r̄ = r for real r\nIt swaps i and -i',
          },
          {
            title: 'Defining the Galois Group',
            content: 'For a field extension L/K, the Galois group Gal(L/K) is the group of all K-automorphisms of L. These automorphisms permute the roots of any polynomial in K[x] that splits in L. The group operation is function composition.',
            visualType: 'galois-correspondence',
            example: 'Gal(ℚ(√2)/ℚ) = {id, σ} where σ(√2) = -√2\nThis group has order 2 (isomorphic to ℤ/2ℤ)',
          },
          {
            title: 'Computing Galois Groups',
            content: 'For f(x) ∈ K[x] with splitting field L, Gal(L/K) permutes the roots of f. If f has degree n, Gal(L/K) is a subgroup of Sₙ. The key insight: Gal(L/K) consists of exactly those permutations that preserve ALL algebraic relations among roots.',
          },
          {
            title: 'Example: x³ - 2',
            content: 'The roots of x³ - 2 are ∛2, ω∛2, ω²∛2 (where ω = e^(2πi/3)). The splitting field is ℚ(∛2, ω). The Galois group has 6 elements, isomorphic to S₃, because we can permute the three roots in all possible ways while preserving their algebraic relationships.',
          },
        ],
        quiz: [
          {
            id: 'q1',
            question: 'What is Gal(ℂ/ℝ)?',
            options: [
              'Trivial (just identity)',
              '{identity, complex conjugation}',
              'All permutations of ℂ',
              'Doesn\'t exist',
            ],
            correctIndex: 1,
            explanation: 'The only ℝ-automorphism of ℂ besides identity is complex conjugation.',
          },
          {
            id: 'q2',
            question: 'The Galois group of a degree-n polynomial is always:',
            options: [
              'Exactly Sₙ',
              'A subgroup of Sₙ',
              'The cyclic group ℤ/nℤ',
              'Trivial',
            ],
            correctIndex: 1,
            explanation: 'The Galois group permutes n roots, so it\'s a subgroup of Sₙ (possibly equal to Sₙ).',
          },
          {
            id: 'q3',
            question: 'What\'s |Gal(ℚ(∛2, ω)/ℚ)| for x³ - 2?',
            options: ['2', '3', '6', '9'],
            correctIndex: 2,
            explanation: 'The Galois group is S₃, which has order 3! = 6.',
          },
        ],
      },
      'ap-student': {
        title: 'Galois Groups and the Fundamental Theorem',
        introduction: 'The Galois group encodes the algebraic structure of field extensions. The Fundamental Theorem of Galois Theory establishes a precise correspondence between subgroups and intermediate fields.',
        sections: [
          {
            title: 'Galois Extensions',
            content: 'L/K is a Galois extension if it\'s both normal (L is a splitting field over K) and separable (minimal polynomials have distinct roots). Equivalently, |Gal(L/K)| = [L:K]. Every finite extension of a field of characteristic 0 is separable.',
            example: 'ℚ(√2)/ℚ is Galois: splitting field of x² - 2\nℚ(∛2)/ℚ is NOT Galois: x³ - 2 doesn\'t split\nℚ(∛2,ω)/ℚ is Galois: splitting field of x³ - 2',
          },
          {
            title: 'The Fundamental Theorem',
            content: 'For a Galois extension L/K with G = Gal(L/K), there\'s a bijection between: (1) Subgroups H ≤ G, and (2) Intermediate fields K ⊆ M ⊆ L. The correspondence: H ↔ L^H = {x ∈ L : σ(x) = x for all σ ∈ H}. Moreover, H ⊴ G iff M/K is Galois, and then Gal(M/K) ≅ G/H.',
            visualType: 'galois-correspondence',
          },
          {
            title: 'Computing with the Correspondence',
            content: 'The lattice of subgroups is "upside down" from the lattice of fields: larger subgroups correspond to smaller fields. If [L:K] = n and H ≤ G with |H| = m, then [L^H:K] = n/m.',
            example: 'For x⁴ - 2 over ℚ, G ≅ D₄ (dihedral, order 8)\nSubgroup ⟨r²⟩ of order 2 fixes ℚ(√2)\nSubgroup ⟨s⟩ of order 2 fixes ℚ(⁴√2)',
          },
          {
            title: 'Solvability Criterion',
            content: 'A polynomial f ∈ K[x] is solvable by radicals over K iff its Galois group Gal(L/K) is a solvable group. Since Sₙ is unsolvable for n ≥ 5, and most degree-n polynomials have Galois group Sₙ, the general quintic is unsolvable by radicals.',
          },
        ],
        quiz: [
          {
            id: 'q1',
            question: 'If L/K is Galois with [L:K] = 12, how many intermediate fields are there?',
            options: [
              '12',
              'Same as number of subgroups of Gal(L/K)',
              '6',
              'Infinite',
            ],
            correctIndex: 1,
            explanation: 'By the Fundamental Theorem, intermediate fields correspond bijectively to subgroups.',
          },
          {
            id: 'q2',
            question: 'For a Galois extension, if H ⊴ G, what can we conclude about L^H/K?',
            options: [
              'It\'s not a field extension',
              'L^H/K is also Galois',
              'L^H = L',
              '[L^H:K] = |H|',
            ],
            correctIndex: 1,
            explanation: 'Normal subgroups correspond to Galois intermediate extensions.',
          },
          {
            id: 'q3',
            question: 'Why is x⁵ - 4x + 2 not solvable by radicals over ℚ?',
            options: [
              'It has no real roots',
              'Its Galois group is S₅, which is not solvable',
              'Degree 5 polynomials are never solvable',
              'It\'s reducible',
            ],
            correctIndex: 1,
            explanation: 'This polynomial has Galois group S₅, which is not solvable, hence no radical formula.',
          },
        ],
      },
    },
  },
  {
    id: 'solvability',
    number: 5,
    title: 'The Insolvability of the Quintic',
    shortDescription: 'Why some equations have no formula',
    content: {
      'child': {
        title: 'Puzzles Without Answers',
        introduction: 'Did you know that some math puzzles don\'t have a "nice" answer? Not because they\'re too hard, but because no nice answer exists! Let\'s find out why some puzzles are special this way.',
        sections: [
          {
            title: 'Easy Puzzles Have Formulas',
            content: 'Remember x + 3 = 7? The formula to solve it is: subtract 3 from both sides! For x² = 9, we can use the square root. For many years, people thought every puzzle had a formula.',
            example: 'x + 3 = 7 → x = 7 - 3 = 4\nx² = 9 → x = ±√9 = ±3',
          },
          {
            title: 'Harder Puzzles, Still Formulas',
            content: 'Mathematicians found formulas for harder puzzles too. Puzzles with x³ and x⁴ have complicated but working formulas. Everyone expected x⁵ puzzles would have formulas too!',
            visualType: 'solvability',
          },
          {
            title: 'The Big Surprise',
            content: 'Galois proved something shocking: there\'s NO formula for all x⁵ puzzles! It\'s not that we haven\'t found it - it\'s that it CAN\'T exist. Some puzzles are too "mixed up" inside to have nice answers written down.',
          },
          {
            title: 'Why This Is Amazing',
            content: 'This discovery changed mathematics forever. Sometimes proving something is impossible is just as important as solving a problem. Galois showed us there are limits to what formulas can do!',
          },
        ],
        quiz: [
          {
            id: 'q1',
            question: 'Why don\'t all x⁵ puzzles have formulas?',
            options: [
              'We haven\'t found them yet',
              'They\'re too hard for computers',
              'Galois proved no formula can exist',
              'The answers are imaginary',
            ],
            correctIndex: 2,
            explanation: 'Galois proved mathematically that no general formula can exist for quintic equations.',
          },
          {
            id: 'q2',
            question: 'Do puzzles with x, x², x³, and x⁴ all have formulas?',
            options: ['No, only x and x² do', 'Yes, all of them', 'No, none of them', 'Only some of them'],
            correctIndex: 1,
            explanation: 'Yes! Formulas exist for polynomials of degree 1, 2, 3, and 4.',
          },
        ],
      },
      'lifelong-learner': {
        title: 'The Unsolvability of the Quintic',
        introduction: 'For centuries, mathematicians sought a formula for fifth-degree equations, like the quadratic formula but for quintics. Galois\'s revolutionary work explained not just that no such formula exists, but WHY it cannot exist.',
        sections: [
          {
            title: 'The Historical Quest',
            content: 'By 1545, formulas existed for degrees 1-4. The quadratic formula dates to ancient Babylon. Cardano published cubic and quartic formulas in 1545. For 300 years, the quintic formula remained elusive. Was it hiding, or did it not exist?',
            example: 'Quadratic (degree 2): Known ~2000 BCE\nCubic (degree 3): Cardano, 1545\nQuartic (degree 4): Ferrari, 1545\nQuintic (degree 5): ???',
          },
          {
            title: 'Abel\'s Impossibility',
            content: 'In 1824, Niels Henrik Abel proved no general radical formula exists for degree 5+. But his proof didn\'t explain which specific quintics ARE solvable. This is where Galois\'s insight goes deeper.',
            visualType: 'solvability',
          },
          {
            title: 'Galois\'s Criterion',
            content: 'A polynomial is solvable by radicals if and only if its Galois group is a "solvable group" - one that can be built from abelian pieces. For degrees 1-4, all Galois groups happen to be solvable. For degree 5, the symmetric group S₅ is NOT solvable, and "most" quintics have Galois group S₅.',
            example: 'x⁵ - 1 = 0 is solvable (roots are 5th roots of unity)\nx⁵ - 4x + 2 = 0 is NOT solvable (Galois group is S₅)',
          },
          {
            title: 'The Deeper Meaning',
            content: 'Galois transformed the question from "find a formula" to "study the symmetries." This approach - connecting problems to group structure - became one of the most powerful tools in all of mathematics. It\'s not about what we can\'t do, but about understanding why.',
          },
        ],
        quiz: [
          {
            id: 'q1',
            question: 'Which of these quintics IS solvable by radicals?',
            options: ['x⁵ - 4x + 2', 'x⁵ - 1', 'Both', 'Neither'],
            correctIndex: 1,
            explanation: 'x⁵ - 1 factors nicely (roots of unity). Its Galois group is cyclic, hence solvable.',
          },
          {
            id: 'q2',
            question: 'What makes a group "solvable" in this context?',
            options: [
              'It has a solution',
              'It can be decomposed into abelian pieces',
              'It has order 5',
              'It contains only even permutations',
            ],
            correctIndex: 1,
            explanation: 'A solvable group has a subnormal series with abelian quotients.',
          },
          {
            id: 'q3',
            question: 'Why did Galois\'s approach matter more than just proving impossibility?',
            options: [
              'It was shorter',
              'It explains exactly which polynomials are solvable',
              'It provided new formulas',
              'It proved Abel wrong',
            ],
            correctIndex: 1,
            explanation: 'Galois gave a criterion: solvable iff Galois group is solvable. This classifies ALL polynomials.',
          },
        ],
      },
      'ap-student': {
        title: 'Solvability by Radicals',
        introduction: 'The crown jewel of Galois theory is the complete characterization of solvable polynomials. We\'ll prove the main theorem connecting solvability to group theory and examine specific examples.',
        sections: [
          {
            title: 'Radical Extensions',
            content: 'A simple radical extension is K(ⁿ√a)/K for some a ∈ K. A radical tower is a chain K = K₀ ⊂ K₁ ⊂ ... ⊂ Kₙ where each Kᵢ₊₁ = Kᵢ(ⁿⁱ√aᵢ). An extension L/K is solvable by radicals if L is contained in some radical tower over K.',
            example: 'ℚ(√2, ∛3) is in a radical tower:\nℚ ⊂ ℚ(√2) ⊂ ℚ(√2, ∛3)',
          },
          {
            title: 'The Main Theorem',
            content: 'Theorem: f(x) ∈ K[x] is solvable by radicals over K iff Gal(f) is a solvable group. The proof uses: (1) Radical extensions have solvable Galois groups (cyclic extensions from adjoining roots), (2) Subgroups/quotients of solvable groups are solvable, (3) Conversely, solvable Galois groups correspond to radical towers.',
            visualType: 'solvability',
          },
          {
            title: 'Why S₅ is Unsolvable',
            content: 'The only normal subgroups of S₅ are {e}, A₅, and S₅. Since A₅ is simple (no proper normal subgroups) and non-abelian, we cannot build an abelian subnormal series. Key fact: A₅ has order 60 and is the smallest non-abelian simple group.',
            example: 'S₅: Normal subgroups are {e}, A₅, S₅\nS₅/A₅ ≅ ℤ/2ℤ (abelian, good)\nA₅/{e} = A₅ (simple non-abelian, blocked!)',
          },
          {
            title: 'Explicit Unsolvable Quintics',
            content: 'To show f(x) is unsolvable, prove Gal(f) = S₅. Useful criteria: (1) f irreducible over ℚ, (2) f has exactly 3 real roots (forces a complex conjugation giving a transposition), (3) 5||Gal(f)| (Cauchy → 5-cycle). Together these generate S₅.',
            example: 'x⁵ - 4x + 2:\n• Irreducible by Eisenstein (p=2)\n• Has exactly 3 real roots\n• Gal(f) ≤ S₅, contains transposition and 5-cycle\n∴ Gal(f) = S₅, unsolvable',
          },
        ],
        quiz: [
          {
            id: 'q1',
            question: 'What is the smallest non-abelian simple group?',
            options: ['S₃', 'A₄', 'A₅', 'S₅'],
            correctIndex: 2,
            explanation: 'A₅ (order 60) is the smallest non-abelian simple group, which is key to quintic insolvability.',
          },
          {
            id: 'q2',
            question: 'To prove x⁵ - 6x + 3 is unsolvable, you need to show:',
            options: [
              'It has 5 real roots',
              'Its Galois group is S₅',
              'It\'s reducible',
              'Its discriminant is a perfect square',
            ],
            correctIndex: 1,
            explanation: 'Unsolvability requires proving the Galois group is S₅ (or any unsolvable group).',
          },
          {
            id: 'q3',
            question: 'Which statement is TRUE about solvable groups?',
            options: [
              'All groups are solvable',
              'Sₙ is solvable for all n',
              'Abelian groups are solvable',
              'A₅ is solvable',
            ],
            correctIndex: 2,
            explanation: 'Abelian groups are trivially solvable (they are their own abelian subnormal series).',
          },
        ],
      },
    },
  },
  {
    id: 'galois-story',
    number: 6,
    title: 'The Story of Galois',
    shortDescription: 'The brilliant mathematician behind the theory',
    content: {
      'child': {
        title: 'A Math Superhero',
        introduction: 'Every great discovery has a story. The story of Galois theory is also the story of a brilliant young man who saw patterns in math that nobody else could see.',
        sections: [
          {
            title: 'A Curious Kid',
            content: 'Évariste Galois was born in France in 1811. As a teenager, he loved math so much that his teachers couldn\'t keep up with him! He read advanced math books on his own, finishing them in days instead of years.',
            example: 'Fun fact: Galois figured out new math that professors couldn\'t understand!',
          },
          {
            title: 'The Big Discovery',
            content: 'While still a teenager, Galois discovered something amazing: he figured out WHY some math puzzles have no formula. Other mathematicians had said "there\'s no formula" but couldn\'t explain why. Galois saw the hidden patterns.',
            visualType: 'galois-correspondence',
          },
          {
            title: 'A Sad Ending',
            content: 'Sadly, Galois died very young at just 20 years old. The night before he died, he stayed up all night writing down his mathematical ideas. Those notes changed mathematics forever!',
          },
          {
            title: 'His Legacy',
            content: 'Today, Galois\'s ideas are used everywhere in math and science. From secret codes on the internet to understanding space and time, his work helps us understand the universe better.',
          },
        ],
        quiz: [
          {
            id: 'q1',
            question: 'How old was Galois when he made his big discovery?',
            options: ['40 years old', 'A teenager', '100 years old', '5 years old'],
            correctIndex: 1,
            explanation: 'Galois was still a teenager when he developed his revolutionary theory.',
          },
          {
            id: 'q2',
            question: 'What did Galois do the night before he died?',
            options: ['Slept all night', 'Wrote down his math ideas', 'Forgot all his math', 'Played games'],
            correctIndex: 1,
            explanation: 'Galois spent his last night frantically writing down his mathematical discoveries.',
          },
        ],
      },
      'lifelong-learner': {
        title: 'Évariste Galois: A Mathematical Revolutionary',
        introduction: 'The story of Galois theory is inseparable from the dramatic life of its creator. Évariste Galois packed extraordinary mathematical achievements into a tragically short life, dying at 20 after a duel.',
        sections: [
          {
            title: 'Early Life (1811-1827)',
            content: 'Born near Paris, Galois showed early intellectual gifts. At 14, he entered the prestigious Lycée Louis-le-Grand. Initially bored by rote learning, he discovered Legendre\'s geometry textbook and was transformed. He devoured it in days, then moved to advanced works.',
            example: 'Age 15: Reading Lagrange\'s works on equations\nAge 16: Attempting (and failing) Polytechnique entrance\nAge 17: Publishing first paper',
          },
          {
            title: 'Revolutionary Mathematics and Politics',
            content: 'At 17, Galois submitted papers to the Academy of Sciences. Cauchy lost one submission; Fourier died with another. Meanwhile, Galois embraced radical republicanism during the turbulent 1830 revolution, was expelled from school, imprisoned twice, and became increasingly marginalized.',
            visualType: 'galois-correspondence',
          },
          {
            title: 'The Fatal Night',
            content: 'In May 1832, Galois was challenged to a duel (the circumstances remain mysterious - possibly over a woman, possibly political). The night before, knowing he might die, he wrote feverishly, annotating his manuscripts with "I have no time" and pleas to future mathematicians to understand his work.',
          },
          {
            title: 'Legacy',
            content: 'Galois died on May 31, 1832, from wounds suffered in the duel. His manuscripts lay neglected until Liouville published them in 1846. Today, Galois theory is fundamental to abstract algebra, number theory, algebraic geometry, and theoretical physics. His ideas about symmetry and structure pervade modern mathematics.',
          },
        ],
        quiz: [
          {
            id: 'q1',
            question: 'How did the Academy of Sciences treat Galois\'s submissions?',
            options: [
              'Published immediately',
              'Lost or ignored them',
              'Awarded him a prize',
              'Banned them',
            ],
            correctIndex: 1,
            explanation: 'Cauchy lost one paper, Fourier died with another - tragic accidents that delayed recognition.',
          },
          {
            id: 'q2',
            question: 'When were Galois\'s ideas finally published?',
            options: ['1832 (right after his death)', '1846', '1900', '1700'],
            correctIndex: 1,
            explanation: 'Liouville published and explained Galois\'s work in 1846, 14 years after his death.',
          },
          {
            id: 'q3',
            question: 'What did Galois write the night before his duel?',
            options: [
              'A love letter',
              'A will',
              'Mathematical manuscripts with annotations',
              'Nothing',
            ],
            correctIndex: 2,
            explanation: 'He frantically annotated his mathematical works, writing "I have no time" in the margins.',
          },
        ],
      },
      'ap-student': {
        title: 'Historical Development of Galois Theory',
        introduction: 'The history of Galois theory interweaves personal tragedy with mathematical revolution. Understanding this history illuminates both the theory\'s significance and the evolution of abstract algebra.',
        sections: [
          {
            title: 'Before Galois',
            content: 'The quintic problem had frustrated mathematicians for centuries. Lagrange (1770s) introduced the key idea of studying permutations of roots. Ruffini (1799) gave an incomplete impossibility proof. Abel (1824) proved impossibility but couldn\'t characterize solvable polynomials. The stage was set.',
            example: 'Lagrange\'s insight: Studied how expressions in roots behave under permutations\nAbel\'s theorem: No general formula, but which specific ones are solvable?',
          },
          {
            title: 'Galois\'s Contribution',
            content: 'Galois introduced the group of permutations preserving algebraic relations among roots (now called the Galois group). He proved the correspondence between subgroups and intermediate fields, and showed solvability by radicals corresponds to the group-theoretic property of solvability.',
            visualType: 'galois-correspondence',
          },
          {
            title: 'Reception and Development',
            content: 'After Liouville\'s 1846 publication, Galois theory developed rapidly. Jordan (1870) wrote the first textbook. Dedekind and Weber extended the theory. Emmy Noether (1920s) recast it in modern abstract algebraic terms. Today it\'s essential to algebraic number theory, algebraic geometry, and beyond.',
            example: 'Applications today:\n• Cryptography (finite field arithmetic)\n• Error-correcting codes\n• Fundamental theorem of algebra proofs\n• Classification of finite simple groups',
          },
          {
            title: 'Modern Galois Theory',
            content: 'Galois theory has generalized far beyond polynomials. Infinite Galois theory handles infinite extensions. Differential Galois theory treats differential equations. The absolute Galois group Gal(ℚ̄/ℚ) is central to modern number theory and the Langlands program - one of the deepest areas of current mathematics.',
          },
        ],
        quiz: [
          {
            id: 'q1',
            question: 'What key idea did Lagrange introduce that Galois developed?',
            options: [
              'Complex numbers',
              'Studying permutations of polynomial roots',
              'The quadratic formula',
              'Calculus',
            ],
            correctIndex: 1,
            explanation: 'Lagrange studied how expressions in roots transform under permutations, presaging group theory.',
          },
          {
            id: 'q2',
            question: 'Who recast Galois theory in modern abstract algebraic terms?',
            options: ['Galois himself', 'Abel', 'Emmy Noether', 'Cardano'],
            correctIndex: 2,
            explanation: 'Emmy Noether\'s work in the 1920s gave Galois theory its modern formulation.',
          },
          {
            id: 'q3',
            question: 'What is the absolute Galois group Gal(ℚ̄/ℚ)?',
            options: [
              'A finite group of order 5',
              'The trivial group',
              'Gal of the algebraic closure of ℚ over ℚ',
              'S₅',
            ],
            correctIndex: 2,
            explanation: 'Gal(ℚ̄/ℚ) captures all algebraic symmetries over ℚ and is central to modern number theory.',
          },
        ],
      },
    },
  },
];
