Template.locatorsList.events({
  'keyup #findLocator': function(event) {
    var input = event.currentTarget.value;
    var locators = Locators.find(
          { shortName: { $regex: input } },
          { sort: { shortName: 1 } });

    return {locatos:locators};
  }
});
