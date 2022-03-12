import Vue from 'vue'

// Custom RussianBlocker component
const russianBlock = {
  template: '<script type="application/javascript"> var config={customMessage: "{{customMessage}}", oncePerDay:{{oncePerDay}}, alsoBlockBelarussian:{{blockBelarus}}}; if ({{redirectToUkrainianAnthem}}){RussianBlocker.redirectToUkrainianAnthem(config);}if ({{redirectToRussianGovernmentComplaints}}){RussianBlocker.redirectToRussianGovernmentComplaints(config);}if ({{displayAlert}}){RussianBlocker.alert(config);}</script>',
  props: {
    blockBelarus: {
      type: Boolean,
      default: 'True'
    },
    redirectToUkrainianAnthem: {
      type: Boolean,
      default: 'True'
    },
    redirectToRussianGovernmentComplaints: {
      type: Boolean,
      default: 'False',
    },
    displayAlert: {
      type: Boolean,
      default: 'False'
    },
    oncePerDay: {
      type: Boolean,
      default: 'False'
    },
    customMessage: {
      type: String,
      default: 'протестуйте против войны!',
    }
  }
}

// Register our component under the desired tag name
Vue.component('<%= options.tag %>', russianBlock)
