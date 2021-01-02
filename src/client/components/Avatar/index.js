import React from 'react';

import student from '../../assets/images/student.png';
import { Avatar } from './Avatar';

export function StudentAvatar() {
  return <Avatar avatarUrl={student} name="student" />;
}
