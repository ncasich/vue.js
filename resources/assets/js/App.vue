<template>
	<div class="container">
		<div class="row">
			<div class="col-xs-12">
				<button @click="selectedComponent = 'appQuote'">Quote</button>
				<button @click="selectedComponent = 'appAuthor'">Author</button>
				<button @click="selectedComponent = 'appNew'">New</button>
				
				<hr>
				<app-quote>
					<div class="quote-title" slot="title">{{quoteTitle}}</div>
					<div class="quote-subtitle" slot="subtitle">{{quoteSubtitle}}</div>
					<div class="quote-content">{{quoteContent}}</div>
				</app-quote>
				
				<component :is="selectedComponent">
					<!--<div slot="title">{{quoteTitle}}</div>-->
					<!--<div slot="subtitle">{{quoteSubtitle}}</div>-->
					<!--<div>{{quoteContent}}</div>-->
				</component>
			</div>
		</div>
	</div>
</template>

<script>
	import Quote from './components/Quote.vue';
	import Author from './components/Author.vue';
	import New from './components/New.vue';
	
	export default {
		data(){
			return {
				quoteTitle: 'The Quote',
				quoteContent: 'That\'s a wonderful quote!',
				quoteSubtitle: 'The Subtitle',
				selectedComponent: 'appQuote'
			};
		},
		components: {
			appQuote: Quote,
			appAuthor: Author,
			appNew: New,
		}
	}
</script>

<style scoped>

</style>