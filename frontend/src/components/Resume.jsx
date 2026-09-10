import React from 'react';
import { FaArrowUpRightFromSquare, FaDownload, FaFileLines } from 'react-icons/fa6';
import '../styles/resume.css';

const Resume = () => {
  const googleDriveFileId = '1_s1isDMIaatH5Ou-dPsTEPVJ252JzcTE';
  const downloadUrl = `https://drive.google.com/uc?export=download&id=${googleDriveFileId}`;
  const previewUrl = `https://drive.google.com/file/d/${googleDriveFileId}/preview`;

  return (
    <section className="resume-section" aria-labelledby="resume-title">
      <div className="resume-inner">
        <div className="resume-heading">
          <p className="resume-kicker"><span /> Field notes / 2026</p>
          <h2 id="resume-title">The work<br /><em>behind the work.</em></h2>
          <p>A concise map of the tools, projects, and habits I am bringing into the next build.</p>
          <a className="resume-download" href={downloadUrl} download="sayan-s-resume.pdf"><FaDownload /> Download resume <FaArrowUpRightFromSquare /></a>
        </div>
        <div className="resume-viewer-shell">
          <div className="resume-viewer-top"><span><FaFileLines /> YSR / RESUME.PDF</span><span>VERSION 01.26</span></div>
          <div className="resume-viewer-meta"><span>ROLE <strong>JUNIOR DEVOPS ENGINEER</strong></span><span>FOCUS <strong>CLOUD / AUTOMATION</strong></span><span>STATUS <strong className="resume-status"><i /> OPEN TO BUILD</strong></span></div>
          <iframe className="resume-frame" src={previewUrl} title="Mohamed Yaseer's resume" allow="autoplay" />
        </div>
        <div className="resume-footer"><span>PDF / GOOGLE DRIVE PREVIEW</span><div /><span>LINUX / CLOUD / DELIVERY</span><strong>READY WHEN YOU ARE</strong></div>
      </div>
    </section>
  );
};

export default Resume;
