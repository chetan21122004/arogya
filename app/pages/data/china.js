window.COUNTRY_DATA = window.COUNTRY_DATA || {};

COUNTRY_DATA.china = {
  currency: "¥",

  treatments: {

    /* ================= Cardiology & Cardiac Surgery ================= */
    angioplasty_ptca: { usd: [10000, 20000], local: [70000, 140000] },
    bypass_surgery_cabg: { usd: [15000, 35000], local: [105000, 245000] },
    heart_valve_replacement: { usd: [20000, 50000], local: [140000, 350000] },
    pacemaker_implantation: { usd: [10000, 20000], local: [70000, 140000] },
    cardiac_consultation: { usd: [285, 715], local: [2000, 5000] },

    /* ================= Orthopedics & Joint Replacement ================= */
    total_knee_replacement: { usd: [2000, 10000], local: [14000, 70000] },
    hip_replacement: { usd: [2000, 10000], local: [14000, 70000] },
    shoulder_elbow_replacement: { usd: [2000, 10000], local: [14000, 70000] },
    arthroscopy: { usd: [2000, 8000], local: [14000, 42000] },
    spinal_surgery: { usd: [3000, 20000], local: [21000, 140000] },

    /* ================= Neurology & Neurosurgery ================= */
    brain_tumor_surgery: { usd: [20000, 50000], local: [140000, 350000] },
    spine_surgery: { usd: [20000, 50000], local: [140000, 350000] },
    deep_brain_stimulation: { usd: [20000, 50000], local: [140000, 350000] },
    epilepsy_surgery: { usd: [20000, 50000], local: [140000, 350000] },
    stroke_rehabilitation: { usd: [3000, 10000], local: [20000, 70000] },

    /* ================= Oncology (Cancer Treatment) ================= */
    chemotherapy: { usd: [10000, 50000], local: [70000, 350000] },
    radiation_therapy: { usd: [2000, 50000], local: [14000, 350000] },
    surgical_oncology: { usd: [10000, 50000], local: [70000, 350000] },
    bone_marrow_transplant: { usd: [50000, 100000], local: [350000, 700000] },
    cancer_second_opinion: { usd: [150, 800], local: [1000, 4000] },

    /* ================= Gastroenterology & Hepatology ================= */
    liver_transplant: { usd: [50000, 100000], local: [350000, 700000] },
    gallbladder_surgery: { usd: [600, 1900], local: [4000, 13000] },
    bariatric_surgery: { usd: [10000, 30000], local: [70000, 210000] },
    endoscopy_colonoscopy: { usd: [1000, 2200], local: [7000, 15000] },
    gi_cancer_treatment: { usd: [10000, 50000], local: [70000, 350000] },

    /* ================= Urology & Nephrology ================= */
    kidney_transplant: { usd: [20000, 50000], local: [140000, 350000] },
    prostate_surgery: { usd: [3000, 10000], local: [20000, 70000] },
    kidney_stone_removal: { usd: [3000, 10000], local: [21000, 70000] },
    dialysis: { usd: [400, 1500], local: [3000, 10000] },
    urethral_reconstruction: { usd: [5000, 10000], local: [35000, 70000] },

    /* ================= Gynecology & Fertility ================= */
    ivf_icsi: { usd: [20000, 50000], local: [140000, 350000] },
    hysterectomy: { usd: [6000, 20000], local: [42000, 140000] },
    laparoscopic_gynec_surgery: { usd: [3000, 10000], local: [21000, 70000] },
    surrogacy_assistance: { usd: [0, 0], local: [0, 0] },
    maternity_delivery: { usd: [6000, 15000], local: [42000, 100000] },

    /* ================= Cosmetic & Plastic Surgery ================= */
    hair_transplant: { usd: [3000, 10000], local: [20000, 70000] },
    rhinoplasty: { usd: [3000, 10000], local: [20000, 70000] },
    liposuction: { usd: [3000, 9000], local: [20000, 70000] },
    tummy_tuck: { usd: [3000, 10000], local: [21000, 70000] },
    breast_augmentation: { usd: [3000, 10000], local: [20000, 70000] },

    /* ================= Ophthalmology (Eye Care) ================= */
    cataract_surgery: { usd: [1500, 4500], local: [10000, 30000] },
    lasik_surgery: { usd: [1500, 7500], local: [10000, 50000] },
    retinal_surgery: { usd: [3000, 7500], local: [20000, 50000] },
    glaucoma_treatment: { usd: [1500, 3000], local: [10000, 20000] },

    /* ================= ENT (Ear, Nose & Throat) ================= */
    cochlear_implant: { usd: [15000, 30000], local: [100000, 200000] },
    sinus_surgery: { usd: [3000, 10000], local: [20000, 70000] },
    tonsil_adenoid_removal: { usd: [700, 1500], local: [5000, 10000] },
    ear_reconstruction: { usd: [3000, 9000], local: [20000, 60000] },

    /* ================= Dental & Oral Surgery ================= */
    dental_implants: { usd: [2200, 7500], local: [15000, 50000] },
    full_mouth_rehabilitation: { usd: [7500, 25500], local: [50000, 170000] },
    smile_design: { usd: [1500, 4500], local: [10000, 30000] },
    root_canal_treatment: { usd: [700, 1500], local: [5000, 10000] },
    orthodontics: { usd: [3000, 7500], local: [20000, 50000] },

    /* ================= Wellness ================= */
    ayurvedic_detox: { usd: [0, 0], local: [0, 0] },
    stress_relief: { usd: [0, 0], local: [0, 0] },
    weight_management: { usd: [0, 0], local: [0, 0] },
    yoga_naturopathy: { usd: [0, 0], local: [0, 0] }

  }
};
