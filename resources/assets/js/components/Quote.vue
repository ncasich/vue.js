<template>
	<div class="quote">
		<p class="default-title">
			<slot name="title">{{quoteTitle}}</slot>
		</p>
		<p class="default-subtitle"><slot name="subtitle">{{quoteSubTitle}}</slot></p>
		<hr>
		<p class="default-content"><slot>{{quoteContent}}</slot></p>
	</div>
</template>

<script>
	export default{
		data(){
			return {
				quoteTitle: 'This is from quote Title',
				quoteSubTitle: 'This is from quote Subtitile',
				quoteContent: 'This is default slot',
			}
		}
	}
</script>

<style scoped>
	div {
		border: 1px solid #ccc;
		text-align: center;
		box-shadow: 1px 1px #000;
		margin: 30px auto;
		padding: 30px;
		font-size: 45px;
	}
	
	.quote-title {
		color: #f00;
		font-weight: 900;
	}
	
	.quote-subtitle {
		color: #163d79;
		font-weight: 500;
	}
	
	.quote-content {
		color: #0d3625;
		font-style: italic;
	}
	
	.default-title {
		color: rgba(0, 15, 232, 0.85);
		font-weight: 900;
	}
	
	.default-subtitle {
		color: #02b203;
		font-weight: 500;
	}
	
	.default-content {
		color: #f08600;
		font-style: italic;
	}

</style>