import PropTypes from 'prop-types';
import React from 'react';

import { Button } from '../../components';
import { CardWithEventsOrStudyGroups } from '../../components/CardWithEventsOrStudyGroups/CardWithEventsOrStudyGroups';
import ModalWithCancelRegistration from '../../components/ModalWithCancelRegistration/ModalWithCancelRegistration';
import { getOrganizationLogoForEvent } from './getOrganizationLogoForEvent';

export function RegisteredEvent(props) {
  const { event, onCancelRegistration } = props;

  const organizationLogo = getOrganizationLogoForEvent(event);
  const mentor = 'Benji';

  return (
    <CardWithEventsOrStudyGroups
      path={organizationLogo}
      title={`${event.organization} - Week ${event.weekNumber}`}
      datetime={`${event.day} | ${event.date} | ${event.time} CEST`}
      mentor={mentor}
      link={event.link}
    >
      <Button
        appearance="danger"
        modal={(modalProps) => (
          <ModalWithCancelRegistration
            {...modalProps}
            onCancel={onCancelRegistration}
          />
        )}
      >
        Cancel registration
      </Button>
    </CardWithEventsOrStudyGroups>
  );
}

RegisteredEvent.propTypes = {
  event: PropTypes.shape({
    eventId: PropTypes.number,
    organization: PropTypes.string,
    weekNumber: PropTypes.number,
    day: PropTypes.string,
    date: PropTypes.string,
    time: PropTypes.string,
    link: PropTypes.string,
  }).isRequired,
  onCancelRegistration: PropTypes.func.isRequired,
};
