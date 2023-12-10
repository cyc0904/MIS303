const allOptions = [
'contract', 'assurance', 'determine', 'engage', 'establish', 'provision', 'resolve', 'specific', 'assure', 'cancel', 'cancelled', 'obligation', 'obligatory', 'provide', 'provision', 'specify', 'specification', 'attract', 'compare', 'competition', 'consume', 'attract', 'compare', 'competition', 'consume', 'convince', 'fad', 'inspiration', 'persuasion', 'productive', 'attraction', 'attractive', 'comparison', 'comparable', 'compete', 'competitive', 'consumer', 'satisfy', 'satisfactory', 'characteristic', 'consequence', 'consider', 'imply', 'promise', 'protect', 'reputation', 'require', 'variety', 'characterize', 'consideration', 'considerable', 'implication', 'implicit', 'protection', 'reputable', 'repute', 'requirement', 'requisite', 'address', 'demonstrate', 'develop', 'evaluate', 'gather', 'primarily', 'risk', 'strategy', 'substitution', 'demonstration', 'demonstrative', 'development', 'evaluation', 'strategy', 'strategic', 'substitute', 'conference', 'accommodate', 'attend', 'location', 'register', 'select', 'session', 'accommodation', 'accommodating', 'arrange', 'associate', 'associate', 'attendance', 'selection', 'selective', 'register', 'registration', 'access', 'allocate', 'compatible', 'delete', 'display', 'duplicate', 'failure', 'ignore', 'search', 'accessible', 'allocation', 'capacity', 'durable', 'initiative', 'recur', 'reduction', 'stock', 'afford', 'initiative', 'initiation', 'physical', 'provision', 'recurrence', 'reduction', 'appreciation', 'code', 'expose', 'glimpse', 'practice', 'reinforce', 'appreciate', 'exposure', 'practical', 'reinforcement', 'verbalize', 'verbal', 'facilitate', 'network', 'process', 'replace', 'revolution', 'skill', 'software', 'store', 'revolution', 'revolutionary', 'technical', 'assemble', 'courier', 'mention', 'petition', 'register', 'revise', 'complicate', 'complicated', 'registration', 'revised', 'revision', 'abundant', 'accomplishment', 'candidate', 'commensurate', 'profile', 'qualification', 'recruit', 'submit', 'accomplish', 'profile', 'qualify', 'qualified', 'ability', 'apply', 'background', 'confidence', 'expert', 'hesitant', 'application', 'confidence', 'expertise', 'expert', 'hesitation', 'presentation', 'presentation', 'conduct', 'generate', 'mentor', 'reject', 'success', 'conductor', 'rejection', 'succeed', 'basis', 'aware', 'benefit', 'compensate', 'eligible', 'negotiate', 'raise', 'retire', 'base', 'beneficial', 'compensation', 'flexible', 'flexibility', 'negotiation', 'achievement', 'contribute', 'dedication', 'loyal', 'merit', 'obviously', 'productive', 'promote', 'recognition', 'value', 'achieve', 'contribution', 'contributor', 'dedicate', 'loyalty', 'product', 'promotion', 'promoter', 'bargain', 'behavior', 'comfort', 'expand', 'explore', 'item', 'mandatory', 'merchandise', 'trend', 'comfortable', 'expansion', 'expanded', 'exploration', 'mandate', 'strict', 'diversify', 'enterprise', 'essentially', 'everyday', 'function', 'maintain', 'obtain', 'prerequisite', 'quality', 'smooth', 'source', 'stationery', 'diverse', 'enterprising', 'essential', 'essence', 'functional', 'carrier', 'fulfill', 'inventory', 'minimize', 'supply', 'accuracy', 'accurate', 'integrate', 'integration', 'minimal', 'minimum', 'suffice', 'sufficient', 'compile', 'discount', 'efficient', 'estimate', 'impose', 'mistake', 'promptly', 'rectify', 'efficient', 'estimation', 'imposition', 'imposing', 'prompt', 'adjustment', 'crucial', 'discrepancy', 'disturb', 'liability', 'reflection', 'tedious', 'verify', 'adjust', 'automatic', 'automation', 'reflect', 'accept', 'balance', 'borrow', 'dividend', 'mortgage', 'restricted', 'signature', 'transaction', 'acceptance', 'acceptable', 'caution', 'cautious', 'deduction', 'restrict', 'restriction', 'transact', 'accumulate', 'asset', 'audit', 'budget', 'debt', 'outstanding', 'reconcile', 'accumulation', 'profit', 'attitude', 'commit', 'conservative', 'fund', 'invest', 'portfolio', 'resource', 'aggression', 'commitment', 'noncommittal', 'conserve', 'investment', 'investor', 'wisdom', 'wise', 'joint', 'preparation', 'desire', 'forecast', 'level', 'overall', 'perspective', 'project', 'realistic', 'target', 'translation', 'yield', 'adjacent', 'collaboration', 'concentrate', 'conducive', 'hamper', 'lobby', 'scrutiny', 'collaborate', 'collaborative', 'concentration', 'concentrated', 'disrupt', 'option', 'optional', 'scrutinize', 'inscrutable', 'agenda', 'conclude', 'goal', 'priority', 'progress', 'adhere', 'length', 'period', 'periodic', 'prior', 'prioritize', 'progression', 'progressive', 'adherence', 'adherent', 'conclusion', 'conclusive', 'conform', 'defect', 'enhance', 'garment', 'inspect', 'inspection', 'inspector', 'perceptive', 'repel', 'repellent', 'uniform', 'uniformity', 'perceive', 'perception', 'perceived', 'response', 'anxious', 'anxiety', 'assume', 'assumption', 'experiment', 'logic', 'logical', 'respond', 'response', 'respondent', 'responsible', 'responsibility', 'supervise', 'ascertain', 'decade', 'decadent', 'decadence', 'examine', 'research', 'researcher', 'solve', 'solvent']; //Array to store all options (vocabs)
const allQ = [
  'a binding agreement that is enforceable by law', 'a binding commitment to do or give or refrain from something', 'find out or learn with certainty, as by making an inquiry', "consume all of one's attention or time", 'set up or found', 'the activity of supplying something', 'find a solution or answer', 'stated explicitly or in detail', 'inform positively and with certainty and confidence', 'declare null and void', 'no longer planned or scheduled', 'the state of being bound to do or pay something', 'required by compulsion or convention', 'give something useful or necessary to', 'the activity of supplying something', 'be particular about', 'the act of naming explicitly', 'exert a force on', 'examine and note the similarities or differences of', 'the act of contending with others for rewards or resources', 'take in as food', 'exert a force on', 'examine and note the similarities or differences of', 'the act of contending with others for rewards or resources', 'take in as food', 'make realize the truth or validity of something', 'an interest followed with exaggerated zeal', 'arousal of the mind to unusual activity or creativity', 'communication intended to induce belief or action', 'capable of bringing forth, especially abundantly', 'the quality of arousing interest', 'pleasing to the eye or mind as through beauty or charm', 'the act of examining resemblances', 'able to be described as similar', 'engage in a contest or measure oneself against others', 'involving rivalry over something', 'a person who uses goods or services', 'meet the requirements or expectations of', 'giving contentment', 'typical or distinctive', 'a phenomenon that is caused by some previous phenomenon', 'think about carefully; weigh', 'express or state indirectly', 'a verbal commitment agreeing to do something in the future', 'shield from danger, injury, destruction, or damage', 'the general estimation that the public has for a person', 'have need of', 'a category of things distinguished by a common quality', 'be typical of', 'the process of giving careful thought to something', 'large in number, amount, extent, or degree', 'something that is inferred', 'suggested though not directly expressed', 'the activity of shielding someone or something', 'held in high esteem and honor', 'the state of being held in high esteem and honor', 'necessary activity', 'necessary for relief or supply', 'the place where a person or organization can be found', 'give an exhibition of to an interested audience', 'progress or evolve through a process of natural growth', 'estimate the nature, quality, ability or significance of', 'assemble or get together', 'for the most part', 'a source of danger', 'an elaborate and systematic plan of action', 'putting one thing or person in the place of another', 'a show or display', 'a pronoun that points out an intended referent', 'a process in which something passes to a different stage', 'the act of ascertaining or judging the quality of', 'an elaborate and systematic plan of action', 'relating to an elaborate and systematic plan of action', 'a person or thing that can take the place of another', 'a prearranged meeting for consultation or discussion', 'have room for; hold without crowding', 'be present', 'the act of putting something in a certain place', 'an official written record of names or events', 'pick out or choose from a number of alternatives', "a meeting for execution of a group's functions", 'making or becoming suitable; adjusting to circumstances', 'obliging; willing to do favors', 'put into a proper or systematic order', 'bring or come into action', 'bring or come into action', 'the act of being present at a meeting or event', 'the act of choosing', 'characterized by very careful or fastidious choice', 'an official written record of names or events', 'the act of registering for something', 'the right to enter', 'distribute according to a plan or set apart for a purpose', 'able to exist and perform in harmonious combination', 'cut or eliminate', 'something intended to communicate a particular impression', 'a copy that corresponds to an original exactly', 'an act that does not succeed', 'refuse to acknowledge', 'look or seek', 'capable of being reached', 'the act of distributing or apportioning according to a plan', 'capability to perform or produce', 'existing for a long time', 'readiness to embark on bold new ventures', 'happen or occur again', 'the act of decreasing something', 'a supply of something available for future use', 'have the financial means to do something or buy something', 'readiness to embark on bold new ventures', 'the act of starting something for the first time', 'involving the body as distinguished from the mind or spirit', 'the activity of supplying something', 'event of happening again, especially at regular intervals', 'the act of decreasing something', 'understanding of the nature or meaning of something', 'a set of rules or principles or laws', 'show; make visible or apparent', 'a brief or incomplete view', 'a customary way of operation or behavior', 'strengthen and support', 'be fully aware of; realize fully', 'the state of being vulnerable to something', 'guided by experience and observation rather than theory', 'an act performed to strengthen approved behavior', 'express in speech', 'of or relating to or formed from words in general', 'make easier', 'an open fabric woven together at regular intervals', 'a particular course of action intended to achieve a result', 'put something back where it belongs', 'a single complete turn', 'an ability that has been acquired by training', 'written programs operating on a computer system', 'a mercantile establishment for the sale of goods or services', 'a single complete turn', 'markedly new or introducing radical change', 'of or relating to aptitude in a practical skill', 'create by putting components or members together', 'a person who carries a message', 'make reference to', 'a formal request that something be submitted to an authority', 'an official written record of names or events', 'make changes to', 'make less simple', 'difficult to analyze or understand', 'the act of registering for something', 'improved or brought up to date', 'the act of altering', 'present in great quantity', 'the action of achieving something', 'someone who is considered for something', 'corresponding in size or degree or extent', 'an outline of something, especially a face from the side', 'the act of modifying or changing the strength of some idea', 'cause to assemble or enlist in the military', 'yield to the control of another', 'achieve with effort', 'an outline of something, especially a face from the side', 'prove capable or fit; meet requirements', 'meeting the proper standards and requirements for a task', 'the quality of having the means or skills to do something', 'employ for a particular purpose', 'the part of a scene behind objects in the front', 'belief in yourself and your abilities', 'a person with special knowledge who performs skillfully', 'unable to act or decide quickly or firmly', 'the action of putting something into operation', 'belief in yourself and your abilities', 'skillfulness by virtue of possessing special knowledge', 'a person with special knowledge who performs skillfully', 'the act of pausing uncertainly', 'the act of formally giving something, as a prize', 'the act of formally giving something, as a prize', 'the way a person behaves toward other people', 'bring into existence', 'a wise and trusted guide and advisor', 'refuse to accept or acknowledge', 'an event that accomplishes its intended purpose', 'the person who leads a musical group', 'the act of turning something down', 'attain success or reach a desired goal', 'the fundamental assumptions from which something is begun', 'having or showing knowledge or understanding or realization', 'something that aids or promotes well-being', 'make amends for', 'qualified for or allowed or worthy of being chosen', 'discuss the terms of an arrangement', 'move upwards', 'withdraw from active participation', 'lowest support of a structure', 'promoting or enhancing well-being', 'the act of making amends for service, loss, or injury', 'able to bend easily', 'the property of being easily bent or shaped', 'a discussion intended to produce an agreement', 'the action of accomplishing something', 'give, provide, or supply something', 'complete and wholehearted fidelity', 'steadfast in allegiance or duty', 'the quality of being deserving', 'unmistakably', 'capable of bringing forth, especially abundantly', 'assign to a higher position', 'identifying something or someone by remembering', 'the quality that renders something desirable', 'gain with effort', 'a voluntary gift made to some worthwhile cause', 'a writer published in a periodical or as part of a book', 'give entirely to a specific person, activity, or cause', 'the quality of being steadfast in allegiance or duty', 'an artifact that has been created by someone or some process', 'the act of raising in rank or position', 'someone who is an active supporter and advocate', 'an agreement between parties fixing obligations of each', 'the way a person acts toward other people', 'a state of being relaxed and feeling no pain', 'extend in one or more directions', 'travel to or penetrate into', 'a distinct part that can be specified separately in a group', 'required by rule', 'commodities offered for sale', 'a general tendency to change, as of opinion', 'providing or experiencing physical well-being or relief', 'the act of increasing in size or volume or quantity or scope', 'increased in extent or size or bulk or scope', 'travel for the purpose of discovery', 'a formal statement of a command to do something', 'rigidly accurate; allowing no deviation from a standard', 'vary in order to spread risk or to expand', 'a purposeful or industrious undertaking', "at bottom or by something's very nature", 'commonplace and ordinary', 'what something is used for', 'keep in a certain state, position, or activity', 'come into possession of', 'something that is needed or obligatory in advance', 'an essential and distinguishing attribute of something', 'having a surface free from roughness or irregularities', 'the place where something begins', 'paper cut to an appropriate size for writing letters', 'distinctly dissimilar or unlike', 'marked by initiative and readiness to undertake new projects', 'basic and fundamental', 'the choicest or most vital part of some idea or experience', 'designed for or capable of a particular use', 'a person or firm transporting people or goods or messages', 'meet a want or need', 'a detailed list of all the items in stock', 'make small or insignificant', 'circulate or distribute or equip with', 'the quality of being near to the true value', 'characterized by perfect conformity to fact or truth', 'make into a whole or make part of a whole', 'the act of combining into a whole', 'the least possible', 'the smallest possible quantity', 'be adequate, either in quality or quantity', 'of a quantity that can fulfill a need or requirement', 'get or gather together', 'an amount or percentage deducted', 'being effective without wasting time, effort, or expense', 'judge tentatively', 'charge and collect payment', 'a wrong action attributable to bad judgment or inattention', 'with little or no delay', 'make right or correct', 'being effective without wasting time, effort, or expense', 'an approximate calculation of quantity or degree or worth', 'the act of enforcing something', 'befitting an important, distinguished, or powerful person', 'according to schedule or without delay', 'the act of making something different', 'of extreme importance; vital to the resolution of a crisis', 'a difference between conflicting facts or claims or opinions', 'trouble deeply', 'the state of being legally obliged and responsible', 'the phenomenon of a wave being thrown back from a surface', 'so lacking in interest as to cause mental weariness', 'confirm the truth of', 'alter or regulate so as to conform to a standard', 'operating with minimal human intervention', 'the act of implementing the control of equipment', 'throw or bend back from a surface', 'receive willingly something given or offered', 'harmonious arrangement or relation of parts within a whole', 'get temporarily', 'a number to be divided by another number', 'a conveyance of property as security for repaying a loan', 'subject to an act of limitation', 'your name written in your own handwriting', 'conducting business within or between groups', 'the state of being satisfactory', 'worthy of approval or satisfactory', 'judiciousness in avoiding harm or danger', 'showing careful forethought', 'the act of removing a part from the whole', 'limit access to', 'an act of limiting', 'conduct business', 'get or gather together', 'a useful or valuable quality', 'examine carefully for accuracy', 'a summary of intended expenditures', 'the state of owing something, especially money', 'of major significance or importance', 'come to terms', 'a gain or increase in something over time', 'the advantageous quality of being beneficial', 'a complex mental state involving beliefs and feelings', 'engage in or perform', 'resistant to change', 'a reserve of money set aside for some purpose', 'lay out money or resources in an enterprise', 'a large, thin case for loose papers or drawings or maps', 'aid or support that may be drawn upon when needed', 'a disposition to behave forcefully and energetically', 'the act of binding yourself to a course of action', 'refusing to bind oneself to a particular course of action', 'keep in safety and protect from harm, loss, or destruction', 'laying out money or capital in an enterprise', 'someone who commits capital to gain financial returns', 'accumulated knowledge or erudition or enlightenment', 'having intelligence and discernment', 'junction by which parts or objects are linked together', 'setting in order in advance some act or purpose', 'the feeling that accompanies an unsatisfied state', 'a prediction about how something will develop', 'a relative position or degree of value in a graded group', 'involving only main features', 'a way of regarding situations or topics', 'a planned undertaking', 'aware or expressing awareness of things as they are', 'a reference point to shoot at', 'rendering in another language with the same meaning', 'give or supply', 'having a common boundary or edge', 'act of working jointly', 'make denser, stronger, or purer', 'tending to bring about; being partly responsible for', 'prevent the progress or free movement of', 'a large entrance or reception room or area', 'the act of examining something closely, as for mistakes', 'work together on a common enterprise or project', 'accomplished by working jointly', 'the spatial property of being crowded together', 'gathered together or made less diffuse', 'make a break in', 'one of a number of things from which only one can be chosen', 'possible but not necessary; left to personal choice', 'examine carefully for accuracy', 'difficult or impossible to understand', 'a list of matters to be taken up, as at a meeting', 'bring to a close', 'the state of affairs that a plan is intended to achieve', 'status established in order of importance or urgency', 'the act of moving forward, as toward a goal', 'stick to firmly', 'the linear extent in space from one end to the other', 'an amount of time', 'happening or recurring at regular intervals', 'earlier in time', 'assign a status in order of importance or urgency', 'the act of moving forward, as toward a goal', 'favoring or promoting modern or innovative ideas', 'the property or act of sticking together', 'someone who believes and helps to spread a doctrine', 'a position or opinion reached after consideration', 'forming a decisive end or resolution', 'be similar, be in line with', 'a failing or deficiency', 'increase', 'an article of clothing', 'look over carefully', 'a formal or official examination', 'an investigator who observes carefully', 'of or relating to awareness via the senses', 'force or drive back', 'serving or tending to cause aversion', 'clothing of distinctive design worn by members of a group', 'the quality of lacking diversity or variation', 'become aware of through the senses', 'the process of becoming aware through the senses', 'detected by instinct or inference', 'the speech act of continuing a conversational exchange', 'causing or fraught with or showing nervousness', 'a vague unpleasant emotion in anticipation of a misfortune', 'take to be the case or to be true', 'the act of taking something for granted', 'the act of conducting a controlled test or investigation', 'the branch of philosophy that analyzes inference', 'based on known statements or events or conditions', 'show a reaction to something', 'the speech act of continuing a conversational exchange', 'replying', 'worthy of or requiring trust; held accountable', 'the social force that binds you to a course of action', 'watch and direct', 'learn or discover with confidence', 'a period of 10 years', 'relating to indulgence in something pleasurable', 'the state of being degenerate in mental or moral qualities', 'observe, check out, and look over carefully or inspect', 'a seeking for knowledge', 'a scientist devoted to systematic investigation', 'find the answer to or understand the meaning of', 'capable of meeting financial obligations'
]; //Array to store all questions(definitions)

const questions = [];
const userAnswers = [];
for (let i = 0; i < allQ.length; i++) {
  const question = {
    question: allQ[i],
    correctAnswer: allOptions[i]
  };

  questions.push(question);
}

// Shuffle the questions array
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

shuffleArray(questions);

let currentQuestionIndex = -1; // Initialize currentQuestionIndex
let score = 0; // Initialize score
function displayResult() {
    const quizContainer = document.getElementById("quiz-container");
    quizContainer.innerHTML = ""; // Clear the quiz container

    const resultTitle = document.createElement("h2");
    resultTitle.textContent = `Quiz Completed! You scored ${score} out of 10`;
    quizContainer.appendChild(resultTitle);

    const resultList = document.createElement("ul");
    resultList.classList.add("result-list");

    // Display results for the answered questions
    for (let i = 0; i < userAnswers.length; i++) {
        const question = questions[i].question; // Fetch the question from questions array
        const resultItem = document.createElement("li");
        const isCorrect = userAnswers[i] === questions[i].correctAnswer; // Compare user's answer with correct answer
        const resultText = isCorrect ? "<span class='correct-answer'>Correct</span>" : "<span class='wrong-answer'>Wrong</span>";

        // Create a link with allOptions and attach a click event listener
        const link = document.createElement("a");
        link.href = `https://dictionary.cambridge.org/dictionary/english/${questions[i].correctAnswer}`;
        link.target = "_blank";
        link.textContent = questions[i].correctAnswer;
        link.addEventListener('click', (event) => {
            event.stopPropagation(); // Prevent the li element's click event from firing
        });

        resultItem.innerHTML = `${i + 1}. ${question} : `;
        resultItem.appendChild(link); // Append the link to the resultItem
        resultItem.innerHTML += ` - ${resultText}`;
        resultItem.classList.add(isCorrect ? "correct" : "wrong");
        resultList.appendChild(resultItem);
    }

    quizContainer.appendChild(resultList);
    const restartButton = document.createElement("button");
    restartButton.textContent = "Restart";
    restartButton.classList.add("btn-primary")
    restartButton.addEventListener('click', restartQuiz);
    
    quizContainer.appendChild(restartButton);
}
function restartQuiz() {
    location.reload();
    
}



function displayQuestion() {
    currentQuestionIndex++; // Move to the next question
    if (currentQuestionIndex < 10) { // Limit the quiz to 10 questions
        const question = questions[currentQuestionIndex];
        const questionElement = document.getElementById("question");
        const optionsContainer = document.getElementById("options-container");
        const scoreElement = document.getElementById("score");

        // Display the question
        questionElement.textContent = question.question;

        // Generate options array (with the correct answer and three other options)
        const options = allOptions.filter(option => option !== question.correctAnswer);
        const incorrectOptions = options.sort(() => Math.random() - 0.5).slice(0, 3);
        const allChoices = incorrectOptions.concat(question.correctAnswer);
        shuffleArray(allChoices); // Shuffle all choices
      
        // Display the options
        optionsContainer.innerHTML = "";
      allChoices.forEach((option, index) => {
          const button = document.createElement("button");
          button.textContent = option;
          button.classList.add("button-8");
          button.classList.add("option");
          button.onclick = () => checkAnswer(option === question.correctAnswer, button, question.correctAnswer);
          optionsContainer.appendChild(button);
      });
        // Display the current score
        scoreElement.textContent = `Finished Questions: ${currentQuestionIndex}, Score: ${score}/10`;
    }else {
      const quizContainer = document.getElementById("quiz-container");
      quizContainer.innerHTML = ""; // Clear the quiz container
      displayResult(); // Show the result  
  }
}
function checkAnswer(isCorrect, button, correctAnswer) {
    const selectedAnswer = button.textContent;
    userAnswers.push(selectedAnswer); // Store the user's answer

    if (isCorrect) {
        score++; // Increment score for correct answer
        button.classList.add('correct-background');
    } else {
        button.classList.add('wrong-background');
        const correctButton = Array.from(document.querySelectorAll('.option')).find(btn => btn.textContent === correctAnswer);
        correctButton.classList.add('correct-background');
    }
    const buttons = document.querySelectorAll('.option');
    buttons.forEach(btn => btn.disabled = true); // Disable all buttons after an answer is selected
}

function nextQuestion() {
    // Disable the button if the current question isn't answered
    if (userAnswers[currentQuestionIndex] === undefined) {
      alert('Please finish the question!');
      return
    }

    const optionsContainer = document.getElementById("options-container");
    optionsContainer.innerHTML = ""; // Clear previous options
    displayQuestion(); // Move to the next question
}
// Start the quiz
displayQuestion();

