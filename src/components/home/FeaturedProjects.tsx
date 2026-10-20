import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { projects } from '../../data/projects';
import ProjectCarousel from '../ui/ProjectCarousel';

export default function FeaturedProjects() {
  return (
    <section className="section" aria-label="Featured projects">
      <div className="container">
        <div
          className="section-header"
          style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', flexWrap: 'wrap', gap: 16 }}
        >
          <div>
            <div className="eyebrow">Project Experience</div>
            <h2 className="section-title" style={{ marginBottom: 0 }}>
              Systems I've Built
            </h2>
          </div>
          <Link to="/projects" className="btn btn-secondary" style={{ flexShrink: 0 }}>
            All 7 Projects
            <ArrowRight size={15} />
          </Link>
        </div>

        <ProjectCarousel projects={projects} />
      </div>
    </section>
  );
}
