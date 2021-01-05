import React from 'react';

import admin from '../../assets/images/admin.png';
import mentor from '../../assets/images/mentor.png';
import student from '../../assets/images/student.png';
import { Avatar } from './Avatar';

export function StudentAvatar() {
  return <Avatar avatarUrl={student} name="student" />;
}

export function MentorAvatar() {
  return <Avatar avatarUrl={mentor} name="mentor" />;
}

export function AdminAvatar() {
  return <Avatar avatarUrl={admin} name="admin" />;
}
