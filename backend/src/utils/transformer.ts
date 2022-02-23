import { Application } from '../types/model';
import { BASE_URL } from '../core/config';

const generateLogoUrl = (logoUrl: string | null) => {
  if (!logoUrl) {
    return logoUrl;
  }

  if (logoUrl.startsWith('https://')) {
    return logoUrl;
  }

  return `${BASE_URL}/images/${logoUrl}`;
};

export const transformApplication = (application: Application): Application => {
  return {
    ...application,
    logoUrl: generateLogoUrl(application.logoUrl),
  };
};

export const transformApplications = (applications: Application[]) => {
  return applications.map(transformApplication);
};
