import {
  brand,
  contactInfo,
  footerQuickLinks,
  footerWhyUs,
  socialLinks,
} from "../../data/site";
import Icon from "../ui/Icon";
import SmartLink from "../ui/SmartLink";

function FooterTitle({ children }) {
  return (
    <h2 className="relative mb-6 pb-[13px] text-[17px] font-extrabold after:absolute after:bottom-0 after:right-0 after:h-[3px] after:w-[42px] after:rounded-lg after:bg-gold after:content-['']">
      {children}
    </h2>
  );
}

function FooterLinks({ links }) {
  return (
    <ul>
      {links.map((link) => (
        <li key={link.label} className="mb-[15px]">
          <SmartLink
            to={link.to}
            className="inline-flex items-center gap-2.5 text-[13px] text-[#c6c6c6] transition duration-300 hover:-translate-x-1 hover:text-[#e5c66f]"
          >
            <Icon name="chevronLeft" className="text-[11px] text-gold" />
            {link.label}
          </SmartLink>
        </li>
      ))}
    </ul>
  );
}

const contactRows = [
  { icon: "pin", text: contactInfo.address },
  { icon: "phone", text: contactInfo.phone },
  { icon: "clock", text: contactInfo.hours },
];

export default function Footer() {
  return (
    <footer
      id="contact"
      className="bg-charcoal pt-[42px] text-white md:pt-[60px]"
    >
      <div className="container-x grid gap-7 md:grid-cols-2 lg:grid-cols-[1.3fr_.8fr_1fr_1fr] lg:gap-[38px]">
        <section aria-label="عن المعرض">
          <div className="mb-5 flex items-center gap-3">
            <span className="grid size-[46px] place-items-center overflow-hidden rounded-xl bg-gold">
              <Icon name="crown" className="text-xl text-white" />
            </span>
            <div>
              <p className="mb-1 text-xl font-extrabold">{brand.name}</p>
              <span className="text-xs text-[#d7b968]">{brand.tagline}</span>
            </div>
          </div>
          <p className="max-w-[330px] text-[13px] leading-[2.2] text-[#c0c0c0]">
            نسعى لتقديم تجربة تسوق مميزة تجمع بين جودة المنتجات والأسعار
            المناسبة والاهتمام باحتياجات عملائنا. ثقتكم هي أساس نجاحنا.
          </p>
          <div className="mt-[22px] flex gap-2.5">
            {socialLinks.map((s) => (
              <a
                key={s.id}
                href={s.href}
                aria-label={s.label}
                target="_blank"
                className="grid size-[39px] place-items-center rounded-[9px] border border-[#555] text-white transition duration-300 hover:-translate-y-[3px] hover:border-gold hover:bg-gold"
              >
                <Icon name={s.id} />
              </a>
            ))}
          </div>
        </section>

        <section>
          <FooterTitle>روابط سريعة</FooterTitle>
          <FooterLinks links={footerQuickLinks} />
        </section>

        <section>
          <FooterTitle>لماذا نور الاسلام!</FooterTitle>
          <FooterLinks links={footerWhyUs} />
        </section>

        <section>
          <FooterTitle>بيانات التواصل</FooterTitle>
          {contactRows.map((row) => (
            <div
              key={row.icon}
              className="mb-[17px] flex items-start gap-3 text-[13px] leading-[1.9] text-[#c6c6c6]"
            >
              <Icon
                name={row.icon}
                className="mt-[7px] w-4 shrink-0 text-gold"
              />
              <span>{row.text}</span>
            </div>
          ))}
        </section>
      </div>

      <div className="mt-[45px] border-t border-[#444] py-[22px] text-center text-xs text-[#bcbcbc]">
        <div className="container-x">
          جميع الحقوق محفوظة ©{" "}
          <span className="text-[#dfbd63]">{brand.name}</span>{" "}
          <span className="text-[#dfbd63]">{new Date().getFullYear()}</span>
        </div>
      </div>
    </footer>
  );
}
