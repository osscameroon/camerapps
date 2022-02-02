import { Application } from '../types/model';
import { BASE_URL } from '../core/config';

export const transformApplication = (application: Application): Application => {
  return {
    ...application,
    logoUrl: `${BASE_URL}/images/${application.logoUrl}`,
  };
};

export const transformApplications = (applications: Application[]) => {
  return applications.map(transformApplication);
};
