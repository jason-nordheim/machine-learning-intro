// basics

const net = new brain.NeuralNetwork();

/* Data to feed the nueral network 
 * this will train the nueral network that 
 * "if input x, then output y" and 
 * "if input a, then output c" ... */

// const trainingData = [{
//     input: { r: 0, g: 0,  b: 0 }, // black background
//     output: [1] // we expect white text (1)
// },
// {
//     input: { r: 1, g: 1, b: 1 } , // white background
//     output: [0], // we expect black text (0)
// }]

const trainingData = [
	{ input: { r: 0, g: 0, b: 0 }, output: [ 1 ] },
	{ input: { r: 1, g: 1, b: 1 }, output: [ 0 ] },
	{ input: { r: 0.4818879951853303, g: 0.46614142369563694, b: 0.8241503084783233 }, output: 1 },
	{ input: { r: 0.2674801209200961, g: 0.07737201699089358, b: 0.5816113666285543 }, output: 1 },
	{ input: { r: 0.446609969017294, g: 0.15019759571139457, b: 0.9404648118147152 }, output: 1 },
	{ input: { r: 0.5188323643002166, g: 0.15345040864624604, b: 0.7703825713491528 }, output: 1 },
	{ input: { r: 0.43639666483895545, g: 0.8791251534393474, b: 0.26032099691982635 }, output: 0 },
	{ input: { r: 0.49003504162922296, g: 0.11252524102907246, b: 0.5943574875625814 }, output: 1 },
	{ input: { r: 0.8334424876184503, g: 0.7248467155515654, b: 0.18163541083856338 }, output: 0 },
	{ input: { r: 0.4359328711455348, g: 0.8828815984930205, b: 0.16237135420056625 }, output: 0 },
	{ input: { r: 0.6048466345581816, g: 0.9884437687231791, b: 0.780671909465487 }, output: 0 },
	{ input: { r: 0.14134360803244816, g: 0.8930125271018348, b: 0.019510837413078574 }, output: 0 },
	{ input: { r: 0.7929418285432197, g: 0.5486485075467187, b: 0.04122701847517729 }, output: 0 },
	{ input: { r: 0.43177746629468094, g: 0.27783955780137903, b: 0.8261558985512822 }, output: 0 },
	{ input: { r: 0.6753537919089172, g: 0.09832780374781191, b: 0.7398182194067309 }, output: 1 },
	{ input: { r: 0.9910223903049085, g: 0.6825470842529253, b: 0.9658184816199447 }, output: 0 },
	{ input: { r: 0.29714001230232334, g: 0.15749067976081044, b: 0.246293706494225 }, output: 1 },
	{ input: { r: 0.7406905492566365, g: 0.4194241658840334, b: 0.6810342297766623 }, output: 1 },
	{ input: { r: 0.7293944193878625, g: 0.4212499257243356, b: 0.044552546942642435 }, output: 1 },
	{ input: { r: 0.8580497182444331, g: 0.6384037079422629, b: 0.06557767468398645 }, output: 0 },
	{ input: { r: 0.7662909587600313, g: 0.255694578211314, b: 0.27973184118005867 }, output: 1 },
	{ input: { r: 0.36145452893465424, g: 0.5246779458931283, b: 0.0676690095782484 }, output: 1 },
	{ input: { r: 0.4924690616639038, g: 0.15007260868820116, b: 0.0313768761428137 }, output: 1 },
	{ input: { r: 0.8533353750085617, g: 0.6006415243022247, b: 0.039887224094215856 }, output: 1 },
	{ input: { r: 0.2793967521054861, g: 0.3985061849018736, b: 0.6869588561213662 }, output: 1 },
	{ input: { r: 0.8272769572504453, g: 0.21002963642305517, b: 0.6891287967557744 }, output: 1 },
	{ input: { r: 0.7760258033083307, g: 0.24074474507204902, b: 0.7117069127175668 }, output: 1 },
	{ input: { r: 0.8229327617316595, g: 0.8811133527365438, b: 0.8657717623722458 }, output: 0 },
	{ input: { r: 0.2571051706948424, g: 0.2836371459683038, b: 0.4076291774830674 }, output: 1 },
	{ input: { r: 0.9461189480460201, g: 0.44692259550337665, b: 0.34320304892249354 }, output: 1 },
	{ input: { r: 0.0830579032026002, g: 0.6957057642403823, b: 0.6223919652689633 }, output: 0 },
	{ input: { r: 0.4866848373124504, g: 0.18674561942414902, b: 0.9377916619611983 }, output: 1 },
	{ input: { r: 0.705281069183356, g: 0.20829468304281606, b: 0.6876355641709515 }, output: 1 },
	{ input: { r: 0.3175610099310806, g: 0.7595552369912839, b: 0.8447769039678321 }, output: 0 },
	{ input: { r: 0.11599290720324928, g: 0.9943032541635834, b: 0.02048097831233564 }, output: 0 },
	{ input: { r: 0.175275187666996, g: 0.880362484952592, b: 0.8388279803270033 }, output: 0 },
	{ input: { r: 0.4260758585029749, g: 0.0962086483184239, b: 0.02993696281128977 }, output: 1 },
	{ input: { r: 0.217606563466322, g: 0.41778366031783776, b: 0.06013325701136529 }, output: 1 },
	{ input: { r: 0.02645127629973909, g: 0.4500837896954568, b: 0.01963346497309848 }, output: 1 },
	{ input: { r: 0.7077334835489391, g: 0.7659034078148017, b: 0.7815872100947749 }, output: 0 },
	{ input: { r: 0.5407487779932767, g: 0.7520872964240679, b: 0.4772598970664117 }, output: 0 },
	{ input: { r: 0.25841092714487846, g: 0.3376019515117956, b: 0.24907793641929232 }, output: 1 }
]
/* Train nueral network by providing sample 
 * inputs with expected outputs. */

net.train(trainingData);

/* display the nueral network as a diagram */
const diagram = document.getElementById('diagram');
diagram.innerHTML = brain.utilities.toSVG(net);

/* The closer this is to 1 or 0 indicates the level of confidence 
 * of the nueral network */

console.log('input: {r: 1, g: 1, b: 0}', net.run({ r: 1, g: 1, b: 0 })); // => Float32Array [0.17011985182762146]

const colorEl = document.getElementById('color');
const guessEl = document.getElementById('guess');
const whiteButton = document.getElementById('white-button');
const blackButton = document.getElementById('black-button');
const printButton = document.getElementById('print-button');

let color;
setRandomColor();

whiteButton.addEventListener('click', () => chooseColor(1));
blackButton.addEventListener('click', () => chooseColor(0));
printButton.addEventListener('click', () => printData());

function chooseColor(value) {
	trainingData.push({
		input  : color,
		output : value
	});
	setRandomColor();
}

function printData() {
	console.log(JSON.stringify(trainingData));
}

function setRandomColor() {
	/*  generate 3 random values between 0-1 
     * that will be multiplied by 255 to get the value of the RGB color */

	color = {
		r : Math.random(),
		g : Math.random(),
		b : Math.random()
	};

	/* Pass the color object to the nueral network to see what it 
     * the alogorithm thinks the output should be 
     * (by default) this returns an array, we need the 
     * first value */
	const guess = net.run(color)[0];

	if (guess > 0.5) {
		/* this indicates that the nueral network is leaning toward a white 
         * color for the text (the closer to 1 the more sure) */
		guessEl.style.color = '#FFF';
	} else {
		/* the nueral network is learning toward black text */

		guessEl.style.color = '#000';
	}

	/* set the background color of the div so that we can visually picture the color */
	colorEl.style.background = `rgba(${color.r * 255}, ${color.g * 255}, ${color.b * 255})`;
}
