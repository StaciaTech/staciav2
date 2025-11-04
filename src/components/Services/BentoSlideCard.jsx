// SlideCard.jsx
import React from "react";

/**
 * Very small presentational slide component.
 * - content can be string, JSX, or an object you handle here.
 */
export default function BentoSlideCard({ content }) {
  // simple handling: if object with title/desc, render nicely, else render content directly
  if (content && typeof content === "object" && !React.isValidElement(content)) {
    const { title, description, footer } = content;
    return (
      <div className="slide-card">
        {title && <h3 className="slide-title">{title}</h3>}
        {description && <p className="slide-desc">{description}</p>}
        {footer && <div className="slide-footer">{footer}</div>}
      </div>
    );
  }

  return <div className="slide-card">{content}</div>;
}
