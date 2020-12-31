import React from 'react';
import { Avatar } from './Avatar';
import './Avatar.css';
import student from '../../assets/images/student.png';
import mentor from '../../assets/images/mentor.png';
import admin from '../../assets/images/admin.png';

export default {
  title: 'Avatar',
};

export const avatarForStudent = () => (
  <Avatar avatarUrl={student} name="student" />
);

export const avatarForMentor = () => (
  <Avatar avatarUrl={mentor} name="mentor" />
);

export const avatarForAdmin = () => <Avatar avatarUrl={admin} name="admin" />;
