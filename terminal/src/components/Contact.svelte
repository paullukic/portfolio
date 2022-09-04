<script lang="ts">
	type Contact = {
		name: string;
		icon: string;
		link: string;
	};

	const myContacts: Contact[] = [
		{
			name: 'LinkedIn',
			icon: '../contact/linkedin.png',
			link: 'https://www.linkedin.com/in/paul-lukic/'
		},
		{
			name: 'Email',
			icon: '../contact/gmail.png',
			link: 'paul.lukic94@gmail.com'
		}
	];
</script>

<div class="contact-container p-4 flex flex-col">
	{#each myContacts as contact}
		<div class="rounded overflow-hidden mb-5">
			<div class="px-6 px-4 flex">
				<a href={contact.name == 'Email' ? `mailto:${contact.link}` : contact.link}>
					<img class="w-16 mr-4 on-hover" src={contact.icon} alt={contact.name} />
				</a>
				<div>
					<a href={contact.name == 'Email' ? `mailto:${contact.link}` : contact.link}>
						<span class="font-bold text-s mb-2 text-black">{contact.name}</span>
					</a>
					<p class="text-gray-700 text-base">
						{contact.link}
					</p>
				</div>
			</div>
		</div>
	{/each}
</div>

<style>
	.contact-container {
		background-color: silver;
		height: 100%;
	}
    .on-hover:hover{
        cursor: pointer;
        filter: saturate(2)
    }
</style>