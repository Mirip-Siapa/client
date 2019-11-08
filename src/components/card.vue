<template>
  <div class="column is-one-third">
  <div class="card">
    <div class="card-image">
      <figure class="image is-4by3">
        <img src="https://images.unsplash.com/photo-1573131382472-1317cb6c0610?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80" alt="Placeholder image">
      </figure>
    </div>
    <div class="card-content">
      <div class="media">
        <div class="media-content">
          <p class="subtitle is-6">@johnsmith</p>
        </div>
      </div>

      <div class="content">
        <div>Lookalike:</div>
        <small>
          Clara 100%
        </small>
        <br>
        <div style="display: flex; justify-content: space-between; margin-top: 10px">
          <time datetime="2016-1-1">11:09 PM</time>
          <div style="display: flex">
            <a class="twitter-share-button"
              href="https://twitter.com/intent/tweet?text=Hello%20world" style="margin:5px">
              Tweet
            </a>
            <div class="" data-href="https://developers.facebook.com/docs/plugins/" data-layout="button" data-size="small" style="margin: 5px">
              <a target="_blank" href="https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fdevelopers.facebook.com%2Fdocs%2Fplugins%2F&amp;src=sdkpreparse" class="fb-xfbml-parse-ignore">Bagikan</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name:'card'
}
</script>

<style>

</style>