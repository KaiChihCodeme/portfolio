import React from 'react';

type SkillType = {
    title: string;
    lottieAnimationFile: string;
    skills: React.ReactNode[] | string[];
    softwareSkills: SoftwareSkillType[];
};
  
export type SkillsSectionType = {
    title: string;
    subTitle: string;
    data: SkillType[];
};


type SoftwareSkillType = {
    skillName: string;
    iconifyTag: string;
};
  