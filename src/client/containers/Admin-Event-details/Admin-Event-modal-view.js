import React from 'react';
import { EventCardText } from '../../components/EventCardText/EventCardText';
import Modal from '../../components/Modal/Modal';
import { StudyGroupLogo } from '../../components/StudyGroupLogo/StudyGroupLogo';

import Elasticlogo from './Elastic.logo.svg';
import './Admin-event-modal.style.css';

export default function EventModalView() {
  return (
    <div className="event-modal-view">
      <Modal>
        <div className="study-group-info">
          <div className="study-group-logo">
            <StudyGroupLogo path={Elasticlogo} />
          </div>
          <div className="card-text">
            <EventCardText
              title="Elastic - Week 46"
              datetime="Wednesday | 11 Nov 20|10:00 CEST"
              mentor="Maher"
              link="www.hyf.org"
            />
          </div>
        </div>
        <div className="student-details-block">
          <div className="student-info">
            <p>
              DemoStudent1|class15 <span className="close-btn">x</span>
            </p>

            <p>Topic: JavaScript week3 homework,classes,Function</p>
            <p>
              code :
              <a
                href="maherweb.dk"
                className="student-code-link"
                target="_blank"
              >
                maherweb.dk
              </a>
            </p>
          </div>
          <div className="student-info">
            <p>
              DemoStudent2|class15 <span className="close-btn">x</span>
            </p>

            <p>Topic: JavaScript week3 homework,classes,Function</p>
            <p>
              code :
              <a
                href="maherweb.dk"
                className="student-code-link"
                target="_blank"
              >
                maherweb.dk
              </a>
            </p>
          </div>
          <div className="student-info">
            <p>
              DemoStudent3|class15 <span className="close-btn">x</span>
            </p>

            <p>Topic: JavaScript week3 homework,classes,Function</p>
            <p>
              code :
              <a
                href="maherweb.dk"
                className="student-code-link"
                target="_blank"
              >
                maherweb.dk
              </a>
            </p>
          </div>
        </div>
      </Modal>
    </div>
  );
}
