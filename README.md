# Module to Block Russian and Belarusian users during the Ukranian Invasion

> # #TechForUkraine
> <div align="center">
>   <p>
>      <img src="https://user-images.githubusercontent.com/1626923/155853691-d6d0a541-d3b9-40bf-b8f5-2d38303e9e49.png" />
>   </p>
>   <h2><strong>Russia’s military aggression against Ukraine.</strong></h2>
>   <div align="left">
>     <h3>How can you support Ukrainian civil society?</h3>
>     All help is needed. If you are not able to help locally, by sheltering a fellow Ukrainian, you can also:
>     <ul>
>       <li>
>           Support the Ukraine Armed forces directly by sending funding to the special accounts.<br />
>           <a href="https://bank.gov.ua/en/news/all/natsionalniy-bank-vidkriv-spetsrahunok-dlya-zboru-koshtiv-na-potrebi-armiyi"
>               target="_blank">NBU Special Account to Raise Funds for Ukraine’s Armed Forces</a>
>       </li>
>       <li>
>           Help the ICRC (Red Cross) with donations.<br />
>           <a href="https://www.icrc.org/en/where-we-work/europe-central-asia/ukraine" target="_blank">Ukrainian
>               Red Cross Society</a>
>       </li>
>       <li>
>           Donate to the United Help Ukraine.<br />
>           <a href="https://unitedhelpukraine.org/" target="_blank">United Help Ukraine</a>
>       </li>
>       <li>
>           Donate to Voices of Children<br />
>           <a href="https://voices.org.ua/en/" target="_blank">Voices of Children</a>
>       </li>
>   </div>
> </div>

This nuxt module is a wrapper of [OB42's Russia Blocker.](https://github.com/OB42/RussianBlocker).

## ✍🏻 Motivation

This module is the result of the need of add a Youtube subscribe button in one of my multiple web applitacions. After google it I only was able to find the [official Youtube Subscribe Button](https://developers.google.com/youtube/subscribe), but it only works well in simple JS applications or fullstack ones made with CMS like WordPress, Drupal and more.

As I didn't find any solution for vue apps, I decided to develop this module for nuxt because is the Vue framework I am using majority.

I hope this module be very usefull for so many people with same need than me.

## 🧱 Install

You must add `nuxt-youtube-subscribe-module` dependency using **yarn** or **npm** to your project

```
$ npm install nuxt-youtube-subscribe-module --save
```

or

```
$ yarn add nuxt-youtube-subscribe-module
```

## ⚙️ Config

You have to add `nuxt-youtube-subscribe-module` to `modules` section of `nuxt.config.js`

```js
// nuxt.config.js
{
  ...,
  modules: [
    'nuxt-youtube-subscribe-module'.
  ],
  ...,
}
```

If you want to use the module options you have two ways of doing this:

```js
// nuxt.config.js
// Simple usage
{
  ...,
  modules: [
    ['nuxt-youtube-subscribe-module', {
      tag: 'YoutubeSubscribeButton'
    }]
  ],
  ...,
}
```

```js
// nuxt.config.js
// Using top level options
{
  ...,
  modules: [
    'nuxt-youtube-subscribe-module'
  ],
  ...,
  'youtube-subscribe': {
    tag: 'YoutubeSubscribeButton'
  },
  ...,
}
```

**Configuration options**

| Option | type |  description
| -------- | ---- | -----------
| `tag` | String | **Optional**. Desired name for the component used to embed the Youtube subscribe button. Defaults to `youtube-subscribe-button`.

## ▶️ Usage

For using this module you only have to add the `<youtube-subscribe-button>` tag in the desired location.

**Example 1**: Same that official docs shows by default

```html
<!-- view.html -->
<youtube-subscribe-button
  identifier="my-subscribe-button"
  channel="GoogleDevelopers"
></youtube-subscribe-button>
```

**Example 2**: Official docs example with all options

```html
<!-- view.html -->
<youtube-subscribe-button
  identifier="my-subscribe-button"
  channel="GoogleDevelopers"
  layout="full"
  theme="dark"
></youtube-subscribe-button>
```

**Example 3**: Custom options

```js
// nuxt.config.js
{
  ...,
  modules: [
    ['nuxt-youtube-subscribe-module', {
      tag: 'YoutubeSubscribeButton'
    }]
  ],
  ...,
}
```

```html
<!-- view.html -->
<YoutubeSubscribeButton
  identifier="my-subscribe-button"
  channel="GoogleDevelopers"
  layout="full"
></YoutubeSubscribeButton>
```

**Component props:**

| prop | type | description
| ---- | ---- | -----------
| `identifier` | String | **Required**. Unique string to be used as id in the subscribe button.
| `channelid` | String | **Required conditionally** if no channel is present. Unique string that identifies the **Youtube** channel used to the subscribe button.
| `channel` | String | **Required conditionally** if no channelid is present. Unique string that identifies the **Youtube** channel used to the subscribe button.
| `layout` | String | **Optional**. Desired layout for the subscribe button. Available values are `default` and `full`. Defaults to `default`.
| `theme` | String | **Optional**. Desired theme for the subscribe button. Available values are ` ` (empty string) and `dark`. Defaults to ` `.
| `count` | String | **Optional**. For indicate the visibility of subscribers count. Available values are `default` and `hidden`. Defaults to `default`.

## How does this module work❓

**Module** (when app starts)
1. The module overwrites all default options with the given ones.
2. The module loads the plugin with the `YoutubeSubscribeButton` global Vue component.
3. The module loads the Google JavaScript API.
4. The `youtube-subscribe:gapi-loaded` custom event is fired for very quick components.

**YoutubeSubscribeButton** (when component is used)
1. The component validates all props.
2. All component options are collected.
3. The subscribe button is rendered through `render` gapi (Google API) method if available.
4. A listener for `youtube-subscribe:gapi-loaded` custom event is registered for a second retry for display the subscribe button.
5. The subscribe button is rendered after fired from `youtube-subscribe:gapi-loaded` listener callback.
