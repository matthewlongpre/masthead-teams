import * as microsoftTeams from "@microsoft/teams-js";

// Call the initialize API first
microsoftTeams.initialize();

// Save configuration changes
microsoftTeams.settings.registerOnSaveHandler((saveEvent) => {
  // Let the Microsoft Teams platform know what you want to load based on
  // what the user configured on this page
  microsoftTeams.settings.setSettings({
    contentUrl: 'https://itgux.azurewebsites.net/masthead-teams-app/', // Mandatory parameter
    entityId: 'https://itgux.azurewebsites.net/masthead-teams-app/' // Mandatory parameter
  });

  // Tells Microsoft Teams platform that we are done saving our settings. Microsoft Teams waits
  // for the app to call this API before it dismisses the dialog. If the wait times out, you will
  // see an error indicating that the configuration settings could not be saved.
  saveEvent.notifySuccess();
});

// This API tells Microsoft Teams to enable the 'Save' button. Since Microsoft Teams always assumes
// an initial invalid state, without this call the 'Save' button will never be enabled.
microsoftTeams.settings.setValidityState(true);
