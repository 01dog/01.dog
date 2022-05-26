<script context="module">
    import { marked } from 'marked'
</script>

<script>
    export let author
    let {name, title, picture, biography} = author
</script>

<div class="hero min-h-200 bg-base-200">
    <div class="hero-content flex-col lg:flex-row">
      <img src="{picture.url}" alt="fursona icon by itsprobablymars" class="max-w-sm rounded-lg shadow-2xl mr-3" />
      <div>
        <h1 class="text-5xl font-bold">hi, i'm <span class="text-secondary">{name}</span></h1>
        <h3 class="text-2xl font-bold">{title}</h3>
        <p class="py-6 text-lg">{@html marked(biography)}</p>
      </div>
    </div>
</div>