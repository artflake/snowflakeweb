import React from "react";

const faqs = [
  {
    question: "Default Collapsible Item 1",
    answer:
      "Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.",
  },
  {
    question: "Default Collapsible Item 2",
    answer:
      "Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.",
  },
  {
    question: "Default Collapsible Item 3",
    answer:
      "Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.",
  },
  {
    question: "Default Collapsible Item 4",
    answer:
      "Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.",
  },
  {
    question: "Default Collapsible Item 5",
    answer:
      "Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.",
  },
];
export default function Collapsible() {
  return (
    <div id="acordeon">
      <div id="accordion" role="tablist" aria-multiselectable="true">
        <div className="card no-transition">
          {faqs.map((faq, key) => (
            <CollapsibleItem key={key} {...faq} index={key} />
          ))}
        </div>
      </div>
    </div>
  );
}

function CollapsibleItem({ question, answer, index }) {
  return (
    <>
      <div
        className="card-header card-collapse"
        role="tab"
        id={`heading-${index + 1}`}
      >
        <h5 className="mb-0 panel-title">
          <a
            className="collapsed"
            data-toggle="collapse"
            data-parent="#accordion"
            href={`#collapse-${index + 1}`}
            aria-expanded="false"
            aria-controls={`collapse-${index + 1}`}
          >
            {question}
            <i className="nc-icon nc-minimal-down"></i>
          </a>
        </h5>
      </div>

      <div
        id={`collapse-${index + 1}`}
        className="collapse"
        role="tabpanel"
        aria-labelledby={`heading-${index + 1}`}
      >
        <div className="card-body">{answer}</div>
      </div>
    </>
  );
}
