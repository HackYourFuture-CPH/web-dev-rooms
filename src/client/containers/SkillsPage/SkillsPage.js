import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';

import { Button, Heading, Layout, Loader, Table } from '../../components';
import { AppHeader } from '../../components/Appheader/AppHeader.component';
import Footer from '../../components/footer/footer';
import { useAuthenticatedFetch } from '../../hooks/useAuthenticatedFetch';

export default function SkillsPage() {
  const [isLoading, setIsLoading] = useState(true);
  const [skills, setSkills] = useState([]);
  const { fetch } = useAuthenticatedFetch();

  useEffect(() => {
    fetch('/api/skills').then((data) => {
      setSkills(data);
      setIsLoading(false);
    });
  }, [fetch]);

  return (
    <Layout>
      <AppHeader />

      <Heading>Skills</Heading>

      {isLoading && <Loader />}

      <Table>
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th aria-label="Action" />
          </tr>
        </thead>
        <tbody>
          {skills.map((skill) => (
            <tr key={skill.id}>
              <td>{skill.id}</td>
              <td>{skill.name}</td>
              <td style={{ textAlign: 'right' }}>
                <Button appearance="link">
                  <FontAwesomeIcon icon={faEdit} />
                </Button>
                <Button appearance="link">
                  <FontAwesomeIcon icon={faTrash} />
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
      <Footer />
    </Layout>
  );
}
