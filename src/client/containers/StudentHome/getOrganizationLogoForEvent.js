import ElasticLogo from '../../components/StudyGroupLogo/Elastic.logo.svg';
import HYFLogo from '../../components/StudyGroupLogo/HYF.logo.svg';
import ZendeskLogo from '../../components/StudyGroupLogo/Zendesk.logo.svg';

export function getOrganizationLogoForEvent(event) {
  if (event.organization === 'Zendesk') {
    return ZendeskLogo;
  }

  if (event.organization === 'Elastic') {
    return ElasticLogo;
  }

  return HYFLogo;
}
