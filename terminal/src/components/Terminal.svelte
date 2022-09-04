<!-- terminal like app view -->
<script lang="ts">
	import { browser } from '$app/env';

	import { asciiArt } from '../assets/ascii';
	import beepSound from '../assets/sound/beep.mp3';
	import errorSound from '../assets/sound/error.mp3';

	import { commandHistoryLocalStorage } from '../store/stores';

	let commandHistory: string[] = [];
	let commandHistoryIndex = 0;

	commandHistoryLocalStorage.subscribe((val) => {
		if (browser) return (localStorage.commandHistory = val);
	});

	if (browser) {
		commandHistory = localStorage.commandHistory ? JSON.parse(localStorage.commandHistory) : [];

		commandHistoryIndex = commandHistory.length;
	}

	type TerminalLine = {
		class: string;
		text: string;
	};

	type Command = {
		command: string;
		description: string;
	};

	export let lines: TerminalLine[] = [
		//ascii art
		{
			class: '',
			text:
				'<pre class="asciiArt" style="line-height: 1.15 !important;">' +
				asciiArt[Math.floor(Math.random() * asciiArt.length)] +
				'</pre>'
		},
		{
			class: '',
			text: 'Welcome to my terminal portfolio app.'
		},
		{
			class: '',
			text: "Type 'help' for a list of commands, or 'start gui -win98' to use graphical interface."
		}
	];

	// on lines change scroll to bottom
	$: lines,
		((_) => {
			setTimeout(() => {
				if (browser) {
					document.querySelector('#terminal')!.scrollTop =
						document.querySelector('#terminal')!.scrollHeight;
				}
			}, 10);
		})();

	const handleKeyDown = (e: KeyboardEvent) => {
		if (e.key === 'Enter') {
			e.preventDefault();
			e.stopPropagation();

			let valueCommand: TerminalLine = {
				class: '',
				text: ''
			};

			const commands: Command[] = [
				{
					command: 'help',
					description: 'Display this message'
				},
				{
					command: 'clear',
					description: 'Clear the terminal'
				},
				{
					command: 'clear history',
					description: 'Clears the command history'
				},
				{
					command: 'show history',
					description: 'Shows the command history'
				},
				{
					command: 'reload ascii',
					description: 'Reloads the ascii art'
				},
				{
					command: 'reload',
					description: 'Reloads terminal'
				},
				{
					command: 'get cv',
					description: 'Download my CV'
				},
				{
					command: 'start gui -win98',
					description: 'Start the GUI version of the app'
				},
				{
					command: 'get social',
					description: 'Get my social media links'
				}
			];

			const input = e.target as HTMLInputElement;
			if (commands.some((command) => command.command === input.value)) {
				valueCommand.text = input.value;
				valueCommand.class = 'command';

				let beep = new Audio(beepSound);
				beep.play();
			} else if (input.value) {
				valueCommand.text =
					input.value + ': command not found <br> Type "help" for a list of commands';
				valueCommand.class = 'error';

				let error = new Audio(errorSound);
				error.play();
			}

			if (input.value) {
				if (input.value === commandHistory[commandHistory.length - 1]) {
					commandHistoryIndex = commandHistory.length;
				} else {
					commandHistory.push(input.value);
					commandHistoryIndex = commandHistory.length;
				}

				commandHistoryLocalStorage.set(JSON.stringify(commandHistory));
			}

			input.value = '';
			let valueCommandWithSign: TerminalLine = {
				class: valueCommand.class,
				text: '> ' + valueCommand.text
			};
			if (valueCommand) lines = [...lines, valueCommandWithSign];

			if (valueCommand.text === 'clear') lines = [];

			if (valueCommand.text === 'clear history') {
				commandHistory = ['clear history'];
				commandHistoryIndex = 1;
				commandHistoryLocalStorage.set(JSON.stringify(commandHistory));
			}

			if (valueCommand.text === 'show history') {
				lines = [...lines, { class: '', text: 'Command history:' }];
				commandHistory.forEach((command, index) => {
					lines = [
						...lines,
						{
							class: `${commands.some((comm) => comm.command === command) ? 'command' : 'error'}`,
							text: `> ${command}`
						}
					];
				});
			}

			if (valueCommand.text === 'reload ascii') {
				if (lines[0].text.includes('pre'))
					lines[0].text =
						'<pre style="line-height: 1.15 !important;">' +
						asciiArt[Math.floor(Math.random() * asciiArt.length)] +
						'</pre>';
				else
					lines = [
						...lines,
						{
							class: '',
							text:
								'<pre style="line-height: 1.15 !important;">' +
								asciiArt[Math.floor(Math.random() * asciiArt.length)] +
								'</pre>'
						}
					];
			}

			if (valueCommand.text === 'get cv') {
				let a = document.createElement('a');
				a.href = '../cv.pdf';
				a.download = 'CV.pdf';
				a.click();
			}
			if (valueCommand.text === 'start gui -win98') {
				window.open('/gui/win98.html', '_blank');
			}
			if (valueCommand.text === 'get social') {
				let socialLinks: TerminalLine[] = [
					{
						class: '',
						text: 'My social media links.'
					},
					{
						class: '',
						text: 'GitHub: <a class="text-blue-600 visited:text-purple-600" href="https://github.com/paullukic" target="_blank">https://github.com/paullukic</a>'
					},
					{
						class: '',
						text: 'LinkedIn: <a class="text-blue-600 visited:text-purple-600" href="https://www.linkedin.com/in/paul-lukic/" target="_blank">https://www.linkedin.com/in/paullukic/</a>'
					}
				];
				lines = [...lines, ...socialLinks];
			}

			if (valueCommand.text === 'reload') {
				window.location.reload();
			}

			if (valueCommand.text === 'help') {
				let help: TerminalLine[] = [
					{
						class: '',
						text: 'List of commands:'
					}
				];
				lines = [...lines, ...help];
				commands.forEach((command) => {
					lines = [
						...lines,
						{
							class: '',
							text: `<span style="color: rgb(255, 113, 47); font-weight: bold;">'${command.command}'</span> - ${command.description}`
						}
					];
				});
			}
		}

		// arrow up history command
		if (e.key === 'ArrowUp') {
			e.preventDefault();
			e.stopPropagation();

			if (commandHistory.length > 0) {
				let input = e.target as HTMLInputElement;

				if (commandHistoryIndex > 0) {
					input.value = commandHistory[commandHistoryIndex - 1];
					commandHistoryIndex--;
				} else {
					commandHistoryIndex = commandHistory.length;
					input.value = commandHistory[commandHistoryIndex - 1];
					commandHistoryIndex--;
				}
			}
		}
		// arrow down history command
		if (e.key === 'ArrowDown') {
			e.preventDefault();
			e.stopPropagation();

			if (commandHistory.length > 0) {
				if (commandHistoryIndex < commandHistory.length - 1) commandHistoryIndex++;
				else commandHistoryIndex = 0;

				let input = e.target as HTMLInputElement;
				input.value = commandHistory[commandHistoryIndex];
			}
		}

		// on backspace reset command history index
		if (e.key === 'Backspace') commandHistoryIndex = commandHistory.length;
	};

	const focusTerminalInput = () => {
		const input = document.querySelector('input') as HTMLInputElement;
		input.focus();
	};
</script>

<title>Terminal</title>
<div class="blackTerminal" id="terminal" on:click={focusTerminalInput}>
	<div class="typewriterOne" />

	{#each lines as line}
		<p class={line.class}>{@html line.text}</p>
	{/each}

	<div id="terminal-input">
		<span class="inputSign">> </span><input
			type="text"
			id="terminal-input-element"
			autocomplete="off"
			autocorrect="off"
			spellcheck="false"
			on:keydown={handleKeyDown}
		/>
	</div>
</div>

<style>
	@media only screen and (max-width: 650px) {
		:global(.asciiArt) {
			font-size: .4rem;
		}
	}

	.command {
		color: rgb(255, 113, 47);
		font-family: 'Courier';
		font-size: 1rem;
		font-weight: bold;
	}

	.error {
		color: red;
		font-family: 'Courier';
		font-size: 1rem;
	}

	.blackTerminal {
		background-color: #202020;
		color: greenyellow;
		font-family: 'Courier';
		font-size: 1rem;
		font-weight: 300;
		height: 100%;
		width: 100%;
		overflow: auto;
		top: 0;
		left: 0;
		max-height: 100%;
		max-width: 100%;
		padding-bottom: 40px;
		cursor: auto;
	}

	.blackTerminal p {
		cursor: text;
	}

	#terminal-input > input {
		width: calc(100% - 30px);
		border: none;
		background-color: #202020;
		color: greenyellow;
		font-family: 'Courier';
		font-size: 1rem;
		font-weight: 300;
		padding: 10px;
	}

	#terminal-input > input:focus {
		outline: none;
	}

	.inputSign {
		font-weight: 900;
		padding: 10;
	}

	.invisible {
		visibility: hidden;
	}
</style>
