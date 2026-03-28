'use client'
import { VscSend } from "react-icons/vsc";
import { useState, useId } from 'react'
import { Spinner } from "./Spinner";
import { useTranslations } from "next-intl";
import Turnstile from "react-turnstile";
import ButtonLink from "./ButtonLnk";
import { Fade } from "react-awesome-reveal";

export function ContactForm() {

    const translate = useTranslations('FormContact')
    const translate_t = useTranslations('CTAs')


    const projectTypes = [
        "residencial",
        "vertical",
        "industrial",
        "comercial",
        "otro",
    ]

    const projectStages = [
        "idea",
        "arquitectonico",
        "desarrollo",
        "obra",
    ]

    const priorities = [
        { id: "costos", label: translate("priorities.costos") },
        { id: "arquitectura", label: translate("priorities.arquitectura") },
        { id: "complejo", label: translate("priorities.complejo") },
        { id: "errores", label: translate("priorities.errores") },
        { id: "acompanamiento", label: translate("priorities.acompanamiento") },
    ]

    const contactMethods = [
        { value: "llamada", label: translate("contactMethods.llamada") },
        { value: "whatsapp", label: translate("contactMethods.whatsapp") },
        { value: "videollamada", label: translate("contactMethods.videollamada") },
        { value: "presencial", label: translate("contactMethods.presencial") },
    ]

    const KEY_DE_CLOUDFLARE = process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY!;

    const [submitted, setSubmitted] = useState(false);
    const [isPending, setIsPending] = useState(false);
    const [token, setToken] = useState<string | null>(null);

    const formId = useId();

    const [selectedPriorities, setSelectedPriorities] = useState<string[]>([]);

    const onTogglePriority = (id: string) => {
        setSelectedPriorities((prev) =>
            prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]
        );
    };

    async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {

        try {
            e.preventDefault()
            setIsPending(true);

            const formData = new FormData(e.currentTarget);
            const data = Object.fromEntries(formData);

            const finalData = {
                ...data,
                priority: selectedPriorities
            };

            const response = await fetch("/api/email/contact", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ ...finalData, token }),
            });

            if (!response.ok) {
                alert(`Error: ${response.status}`);
                return;
            }

            setSubmitted(true);

        } catch (error) {
            console.error(error)
        } finally {
            setIsPending(false);
        }

    }


    if (submitted) {
        return (
            <Fade triggerOnce duration={1000}  >
                <div className="flex flex-col items-center max-w-[1200px] justify-center rounded-lg p-12 text-center">
                    <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary">
                        <VscSend className="h-7 w-7 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-card-foreground text-primary">{translate("success_title")}</h3>
                    <p className="mt-3 max-w-md leading-relaxed text-muted-foreground text-primary">
                        {translate("success_message")}
                    </p>

                    <div className="flex flex-row items-center gap-5 mt-10" >
                        <ButtonLink href="/direccion-de-obra" text={translate_t("explore_gallery")} className="bg-primary hover:bg-primary/90 text-white px-8 py-2 rounded-sm " />

                        <ButtonLink href="/portafolio" text={translate_t("explore_projects")} className="bg-primary hover:bg-primary/90 text-white px-8 py-2 rounded-sm " />
                    </div>

                </div>
            </Fade>
        )
    }


    return (
        <section className='flex flex-row items-center gap-x-10 w-full max-w-[1200px] bg-[var(--primary)] mx-auto rounded-lg' >

            <form onSubmit={handleSubmit} className="grid grid-cols-2 gap-8 w-full border border-zinc-200 p-5 lg:p-10 bg-zinc-100 shadow-md backdrop-blur-md rounded-lg shadow-lg" noValidate={false}>

                <div className='flex flex-col gap-4 col-span-2 lg:col-span-1' >

                    {/* Step indicator */}
                    <div className="flex items-center text-xs uppercase tracking-widest mb-2">
                        <span>{translate("title_project")}</span>
                    </div>

                    {/* Nombre */}
                    <div className="flex flex-col gap-2.5">
                        <label htmlFor={`${formId}-nombre`} className="text-sm  font-medium">
                            {translate("name_label")}
                        </label>
                        <input
                            id={`${formId}-nombre`}
                            name="name"
                            placeholder={translate("name_placeholder")}
                            required
                            autoComplete="name"
                            className="h-12 rounded-md border border-border/60 px-3 placeholder:text-muted-foreground/60 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-sky-500 transition-colors"
                        />
                    </div>

                    {/* Correo */}
                    <div className="flex flex-col gap-2.5">
                        <label htmlFor={`${formId}-nombre`} className="text-sm  font-medium">
                            {translate("email_label")}
                        </label>
                        <input
                            id={`${formId}-email`}
                            name="email"
                            placeholder={'email@example.com'}
                            required
                            autoComplete="email"
                            className="h-12 rounded-md border border-border/60 px-3 placeholder:text-muted-foreground/60 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-sky-500 transition-colors"
                        />
                    </div>

                    {/* Contacto */}
                    <div className="flex flex-col gap-2.5">
                        <label htmlFor={`${formId}-contact`} className="text-sm  font-medium">
                            {translate("phone_label")}
                        </label>
                        <input
                            id={`${formId}-contact`}
                            name="contact"
                            placeholder={'+55 *** *** ****'}
                            autoComplete="phone"
                            className="h-12 rounded-md border border-border/60 px-3 placeholder:text-muted-foreground/60 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-sky-500 transition-colors"
                        />
                    </div>

                    {/* Empresa */}
                    <div className="flex flex-col gap-2.5">
                        <label htmlFor={`${formId}-empresa`} className="text-sm  font-medium">
                            {translate("company_label")} <span className="text-muted-foreground ml-1 font-normal">{translate("company_optional")}</span>
                        </label>
                        <input
                            id={`${formId}-empresa`}
                            name="company"
                            placeholder={translate("company_placeholder")}
                            autoComplete="organization"
                            className="h-12 rounded-md border border-border/60 px-3  placeholder:text-muted-foreground/60 focus:outline-none focus:ring-2  focus:ring-sky-500 focus:border-sky-500 transition-colors"
                        />
                    </div>

                    {/* Tipo / Etapa */}
                    <div className="grid sm:grid-cols-2 gap-6">
                        <div className="flex flex-col gap-2.5">
                            <label htmlFor={`${formId}-tipo`} className="text-sm font-medium">
                                {translate("project_type_label")}
                            </label>

                            <div className="relative">
                                <select
                                    id={`${formId}-tipo`}
                                    name="project_type"
                                    required
                                    defaultValue=""
                                    className="h-12 w-full appearance-none rounded-md backdrop-blur-md border border-border/60 px-3 pr-10 focus:outline-none focus:ring-2  focus:ring-sky-500 focus:border-sky-500 transition-colors"
                                >
                                    <option value="" disabled>
                                        {translate("select_placeholder")}
                                    </option>
                                    {projectTypes.map((type) => (
                                        <option key={type} value={type}>
                                            {translate(`projectTypes.${type}`)}
                                        </option>
                                    ))}
                                </select>

                                {/* chevron */}
                                <svg
                                    className="pointer-events-none absolute right-3 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground"
                                    viewBox="0 0 20 20"
                                    fill="currentColor"
                                    aria-hidden="true"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M5.23 7.21a.75.75 0 0 1 1.06.02L10 10.94l3.71-3.71a.75.75 0 1 1 1.06 1.06l-4.24 4.24a.75.75 0 0 1-1.06 0L5.21 8.29a.75.75 0 0 1 .02-1.08z"
                                        clipRule="evenodd"
                                    />
                                </svg>
                            </div>
                        </div>

                        <div className="flex flex-col gap-2.5">
                            <label htmlFor={`${formId}-etapa`} className="text-sm  font-medium">
                                {translate("project_stage_label")}
                            </label>

                            <div className="relative">
                                <select
                                    id={`${formId}-etapa`}
                                    name="step"
                                    required
                                    defaultValue=""
                                    className="h-12 w-full appearance-none rounded-md border border-border/60 px-3 pr-10  focus:outline-none focus:ring-2  focus:ring-sky-500 focus:border-sky-500 transition-colors"
                                >
                                    <option value="" disabled>
                                        {translate("select_placeholder")}
                                    </option>
                                    {projectStages.map((stage) => (
                                        <option key={stage} value={stage}>
                                            {translate(`projectStages.${stage}`)}
                                        </option>
                                    ))}
                                </select>

                                <svg
                                    className="pointer-events-none absolute right-3 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground"
                                    viewBox="0 0 20 20"
                                    fill="currentColor"
                                    aria-hidden="true"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M5.23 7.21a.75.75 0 0 1 1.06.02L10 10.94l3.71-3.71a.75.75 0 1 1 1.06 1.06l-4.24 4.24a.75.75 0 0 1-1.06 0L5.21 8.29a.75.75 0 0 1 .02-1.08z"
                                        clipRule="evenodd"
                                    />
                                </svg>
                            </div>
                        </div>
                    </div>

                    {/* Descripción */}
                    <div className="flex flex-col gap-2.5">
                        <label htmlFor={`${formId}-descripcion`} className="text-sm font-medium">
                            {translate("description_label")}
                        </label>
                        <textarea
                            id={`${formId}-descripcion`}
                            name="message"
                            required
                            placeholder={translate("description_placeholder")}
                            rows={4}
                            className="rounded-md  border border-border/60 px-3 py-3  placeholder:text-muted-foreground/60 focus:outline-none focus:ring-2  focus:ring-sky-500 focus:border-sky-500 transition-colors resize-none"
                        />
                    </div>

                </div>


                <div className='flex flex-col gap-4 col-span-2 lg:col-span-1 ' >

                    {/* Divider */}
                    <div className="flex items-center gap-3 text-xs uppercase tracking-widest">
                        <span>{translate("priorities_title")}</span>
                    </div>

                    {/* Prioridades: fieldset/legend (accesible) */}
                    <fieldset className="flex flex-col gap-2.5">
                        <legend className="text-sm  font-medium mb-2">
                            {translate("priorities_question")}
                        </legend>
                        <p id={`${formId}-prioridades-help`} className="text-xs text-muted-foreground -mt-1">
                            {translate("priorities_help")}
                        </p>

                        <div className="grid gap-5 mt-1" aria-describedby={`${formId}-prioridades-help`}>
                            {priorities.map((priority) => {
                                const checked = selectedPriorities.includes(priority.id);
                                return (
                                    <label
                                        key={priority.id}
                                        className={[
                                            "flex items-start gap-3.5 p-4 rounded-lg border cursor-pointer transition-all duration-200",
                                            checked
                                                ? "border-primary/50 bg-primary/5"
                                                : "border-border/60 bg-secondary/30 hover:border-border hover:",
                                        ].join(" ")}
                                    >
                                        <input
                                            type="checkbox"
                                            name="priority"
                                            required={priorities.length === 0}
                                            value={priority.id}
                                            checked={checked}
                                            onChange={() => onTogglePriority(priority.id)}
                                            className="mt-1 h-4 w-4 accent-primary"
                                        />
                                        <span className="text-sm  leading-relaxed">{priority.label}</span>
                                    </label>
                                );
                            })}
                        </div>
                    </fieldset>

                </div>


                <div className='flex flex-col gap-4 col-span-2 ' >

                    {/* Divider */}
                    <div className="flex items-center gap-3 text-xs text-muted-foreground uppercase tracking-widest">
                        <span>{translate("contact_title")}</span>
                    </div>

                    {/* Contacto: radios nativos con fieldset/legend */}
                    <fieldset className="flex flex-col gap-2.5">
                        <legend className="text-sm  font-medium">
                            {translate("contact_question")}
                        </legend>

                        <div className="grid sm:grid-cols-2 gap-3 mt-1">
                            {contactMethods.map((method, i) => (
                                <label
                                    key={method.value}
                                    className="
                flex items-center gap-3 p-4 rounded-lg border border-border/60 bg-secondary/30 cursor-pointer
                transition-all duration-200 hover:border-border hover:
              "
                                >
                                    <input
                                        type="radio"
                                        name="contact_method"
                                        value={method.value}
                                        required={i === 0} // required en uno del grupo
                                        className="h-4 w-4 accent-primary"
                                    />
                                    <span className="text-sm ">{method.label}</span>
                                </label>
                            ))}
                        </div>
                    </fieldset>

                    {/* Info móvil */}
                    <div className="lg:hidden flex items-start gap-4 p-5 rounded-lg border border-border/60 bg-secondary/30">
                        <div className="flex-shrink-0 mt-0.5">
                            <svg className="w-5 h-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} aria-hidden="true">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.455 2.456L21.75 6l-1.036.259a3.375 3.375 0 00-2.455 2.456z" />
                            </svg>
                        </div>
                        <p className="text-sm text-muted-foreground leading-relaxed">
                            {translate("info_limit")}
                        </p>
                    </div>

                    <Turnstile
                        sitekey={KEY_DE_CLOUDFLARE}
                        onVerify={(token) => setToken(token)}
                    />

                    <button
                        type="submit"
                        disabled={isPending}
                        className={` text-white ${isPending ? 'opacity-70 cursor-not-allowed' : ''} mt-2 inline-flex items-center justify-center gap-2 rounded-md bg-primary px-8 py-3 text-sm font-semibold  transition-colors hover:bg-primary/90 hover:cursor-pointer`}
                    >
                        {isPending ? (
                            <>
                                <Spinner />
                                <span className="text-white" > {translate("sending_message")}</span>
                            </>
                        ) : (
                            <>
                                <VscSend className="h-4 w-4 text-white" />
                                {translate("submit_button")}
                            </>
                        )}
                    </button>


                </div>
            </form>

        </section>
    )
}