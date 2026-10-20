import { Loader2 } from "lucide-react";

interface LoadingOverlayProps {
  title?: string;
  steps?: string[];
}

const LoadingOverlay = ({
  title = "Synthesizing your book...",
  steps = [],
}: LoadingOverlayProps) => {
  return (
    <div className="loading-wrapper">
      <div className="loading-shadow-wrapper bg-white shadow-soft-lg">
        <div className="loading-shadow">
          <Loader2 className="loading-animation size-12 text-[var(--accent-warm)]" />
          <p className="loading-title">{title}</p>
          {steps.length > 0 && (
            <ul className="loading-progress">
              {steps.map((step) => (
                <li key={step} className="loading-progress-item">
                  <span className="loading-progress-status" />
                  <span>{step}</span>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
};

export default LoadingOverlay;
