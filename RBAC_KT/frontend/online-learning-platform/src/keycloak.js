import Keycloak from 'keycloak-js';

const keycloak = new Keycloak({
  url: 'http://localhost:8080/auth',
  realm: 'EducationPlatform',
  clientId: 'education-app',
});

export default keycloak;
