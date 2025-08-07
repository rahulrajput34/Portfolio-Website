"use client";

import {
  Dialog,
  DialogBackdrop,
  DialogTitle,
  Transition,
  TransitionChild,
} from "@headlessui/react";
import { Icon } from "@iconify/react";
import { Fragment, useState } from "react";

interface Props {
  open: boolean;
  onClose(): void;
}

// modal for contact
export default function ContactModal({ open, onClose }: Props) {
  const [form, setForm] = useState({
    fullName: "",
    email: "",
    company: "",
    message: "",
  });
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);

  // handle input changes
  const handleChange =
    (field: keyof typeof form) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
      setForm({ ...form, [field]: e.target.value });

  // submit form
  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSending(true);
    const res = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });
    setSending(false);
    setSent(res.ok);
    if (res.ok) setForm({ fullName: "", email: "", company: "", message: "" });
  }

  // input styles
  const fieldClasses =
    "w-full rounded-lg border border-white/15 bg-black/80 px-5 py-3.5 " +
    "text-sm text-white placeholder-gray-500 outline-none autofill:bg-black/80 " +
    "autofill:text-white autofill:border-white/15 " +
    "autofill:shadow-[inset_0_0_0_1000px_rgba(0,0,0,0.80)]";

  return (
    <Transition show={open} as={Fragment}>
      {/* wrapper */}
      {/* content */}
      <Dialog
        as="div"
        className="fixed inset-0 z-50 grid place-items-center p-6"
        open={open}
        onClose={onClose}
      >
        <DialogBackdrop className="fixed inset-0 bg-black/60 backdrop-blur-sm" />

        <TransitionChild
          as={Fragment}
          enter="transition duration-200 ease-out"
          enterFrom="scale-95 opacity-0"
          enterTo="scale-100 opacity-100"
          leave="transition duration-150 ease-in"
          leaveFrom="scale-100 opacity-100"
          leaveTo="scale-95 opacity-0"
        >
          <div className="relative w-full max-w-3xl overflow-hidden rounded-xl bg-black p-10 md:p-12 shadow-lg">
            {/* close */}
            <button
              onClick={onClose}
              aria-label="Close"
              className="absolute top-4 right-4 text-gray-400 hover:text-white focus:outline-none"
            >
              <Icon icon="mdi:close" className="h-5 w-5" />
            </button>

            {/* title */}
            <DialogTitle className="mb-8 text-2xl font-semibold uppercase tracking-widest bg-gradient-to-r from-emerald-300 to-sky-400 bg-clip-text text-transparent lg:text-3xl">
              Get in touch
            </DialogTitle>

            {sent ? (
              <div className="flex items-center gap-2 text-emerald-400">
                <Icon icon="mdi:check-circle" className="h-6 w-6" />
                <span>Thanks! I’ll reply within 24 h.</span>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="space-y-6"
                autoComplete="off"
              >
                <input
                  type="text"
                  name="fullname"
                  placeholder="Full name *"
                  value={form.fullName}
                  onChange={handleChange("fullName")}
                  required
                  className={fieldClasses}
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Email address *"
                  value={form.email}
                  onChange={handleChange("email")}
                  required
                  className={fieldClasses}
                />
                <input
                  type="text"
                  name="company"
                  placeholder="Company (optional)"
                  value={form.company}
                  onChange={handleChange("company")}
                  className={fieldClasses}
                />
                <textarea
                  name="message"
                  placeholder="Your message *"
                  value={form.message}
                  onChange={handleChange("message")}
                  required
                  rows={5}
                  className={`${fieldClasses} no-scrollbar`}
                />

                {/* buttons */}
                <div className="flex flex-col-reverse gap-3 sm:flex-row sm:justify-end">
                  <button
                    type="button"
                    onClick={onClose}
                    className="flex w-full items-center justify-center gap-2 rounded-lg border border-white/15 py-3 text-sm font-semibold text-white transition hover:bg-white/10 sm:w-auto sm:px-6"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    disabled={sending}
                    className="flex w-full items-center justify-center rounded-lg bg-white py-3 text-sm font-semibold text-gray-950 transition hover:bg-gray-100 disabled:opacity-50 sm:w-auto sm:px-8"
                  >
                    {sending ? "Sending…" : "Send"}
                  </button>
                </div>
              </form>
            )}
          </div>
        </TransitionChild>
      </Dialog>
    </Transition>
  );
}
