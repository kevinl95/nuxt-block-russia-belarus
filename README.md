# Module to Block Russian and Belarusian users during the Ukrainian Invasion

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

Companies, NGOs, and individuals around the world have condemned the violence against the Ukranian people. One way they are doing this is blocking services to Russian users while the Ukranian invasion is ongoing. This Nuxt.js module makes it simple to block users from Russia and Belarus from your site, such as your Vue Storefront store. We identify users from these countries using fingerprints from their web browser. You can configure this module to redirect users to the Ukranian National Anthem on YouTube, to a Russian government complaint form, or soft-block users by presenting an alert window over your website with a custom message. Users can choose to only block/alert these users once per day or on every visit using a cookie. Users can selectively disable this behavior for users from Belarus if they choose, however by default users from Belarus are also detected.

## 🧱 Install

You must add `nuxt-block-russia-belarus` dependency using **yarn** or **npm** to your project

```
$ npm install nuxt-block-russia-belarus --save
```

or

```
$ yarn add nuxt-block-russia-belarus
```

## ⚙️ Config

You have to add `nuxt-block-russia-belarus` to the `modules` section of `nuxt.config.js`

```js
// nuxt.config.js
{
  ...,
  modules: [
    'nuxt-block-russia-belarus'
  ],
  ...,
}
```

## ▶️ Usage

Next, you need to add the `<russia-blocker>` tag in the body tag of your page.

By default this will redirect users from Russia and Belarus to the Ukranian National Anthem on YouTube. You can choose the other options by adding the following component properties to your configuration:

**Example**:

```html
<!-- view.html -->
<russia-blocker
  blockBelarus: True
  redirectToUkrainianAnthem: True
  :redirectToRussianGovernmentComplaints="false"
  :displayAlert="false"
  :oncePerDay="false"
  customMessage: "протестуйте против войны!"
></russia-blocker>
```
The above custom message translates to "Protest the war!"- if it does not please open an issue and let me know!

**Component props:**

| prop | type | description
| ---- | ---- | -----------
| `blockBelarus` | Boolean | **Optional**. Block users from Belarus, which has participated in the invasion. This is True by default.
| `redirectToUkrainianAnthem` | Boolean | **Optional** Redirect blocked users to a video of the Ukranian National Anthem on YouTube. This is the default behavior.
| `redirectToRussianGovernmentComplaints` | Boolean | **Optional** Redirect users to a complaint form on the Russian government's website. If you set this to True, you should set redirectToUkrainianAnthem to False.
| `displayAlert` | Boolean | **Optional**. Soft block users by displaying a popup alert that they can dismiss. This alert box can contain a custom message, but default says "Protest the war" in Russian.
| `oncePerDay` | Boolean | **Optional**. Set a cookie to only block users once per day. This is false by default.
| `customMessage` | String | **Optional**. This lets you set a custom message for the alert box that appears. By default this is set to "Protest the war" in Russian.

## How does this module work❓

**Module** (when app starts)
1. The module loads RussianBlocker.js from a CDN.
2. The module is loaded and a Vue component called `russia-blocker` is made available.

**russia-blocker component**
1. The component checks properties set by the user
2. The component checks the time zone and language set in the user's browser
3. If the user is in Russia or Belarus (optional) the blocking behavior the component is configured for is applied.
