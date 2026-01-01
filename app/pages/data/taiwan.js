window.COUNTRY_DATA = window.COUNTRY_DATA || {};

COUNTRY_DATA.taiwan = {
  currency: "NT$",
  treatments: {

    /* ================= Cardiology & Cardiac Surgery ================= */
    angioplasty_ptca: { usd: [8700, 16700], local: [200000, 350000] },
    bypass_surgery_cabg: { usd: [20000, 26700], local: [600000, 800000] },
    heart_valve_replacement: { usd: [16700, 40000], local: [500000, 1200000] },
    pacemaker_implantation: { usd: [13300, 20000], local: [400000, 600000] },
    cardiac_consultation: { usd: [50, 130], local: [1500, 3800] },

    /* ================= Orthopedics & Joint Replacement ================= */
    total_knee_replacement: { usd: [8000, 16700], local: [180000, 550000] },
    hip_replacement: { usd: [10000, 16700], local: [300000, 550000] },
    shoulder_elbow_replacement: { usd: [3300, 20000], local: [100000, 800000] },
    arthroscopy: { usd: [10000, 20000], local: [300000, 800000] },
    spinal_surgery: { usd: [8000, 16700], local: [180000, 550000] },

    /* ================= Neurology & Neurosurgery ================= */
    brain_tumor_surgery: { usd: [10000, 40000], local: [300000, 1200000] },
    spine_surgery: { usd: [8700, 26700], local: [200000, 800000] },
    deep_brain_stimulation: { usd: [16700, 40000], local: [500000, 1200000] },
    epilepsy_surgery: { usd: [10000, 20000], local: [300000, 600000] },
    stroke_rehabilitation: { usd: [1700, 3300], local: [50000, 100000] },

    /* ================= Oncology (Cancer Treatment) ================= */
    chemotherapy: { usd: [3300, 20000], local: [100000, 800000] },
    radiation_therapy: { usd: [3300, 20000], local: [100000, 600000] },
    surgical_oncology: { usd: [3300, 20000], local: [100000, 600000] },
    bone_marrow_transplant: { usd: [20000, 40000], local: [800000, 1200000] },
    cancer_second_opinion: { usd: [330, 670], local: [10000, 20000] },

    /* ================= Gastroenterology & Hepatology ================= */
    liver_transplant: { usd: [33300, 50000], local: [1000000, 1500000] },
    gallbladder_biliary_surgery: { usd: [3300, 10000], local: [100000, 300000] },
    bariatric_surgery: { usd: [16700, 33300], local: [500000, 1000000] },
    endoscopy_colonoscopy: { usd: [330, 1000], local: [10000, 30000] },
    gi_cancer_treatment: { usd: [3300, 20000], local: [100000, 600000] },

    /* ================= Urology & Nephrology ================= */
    kidney_transplant: { usd: [23300, 40000], local: [700000, 1200000] },
    prostate_surgery: { usd: [3300, 10000], local: [100000, 300000] },
    kidney_stone_removal: { usd: [3300, 10000], local: [100000, 300000] },
    dialysis: { usd: [870, 1670], local: [20000, 50000] },
    urethral_reconstruction: { usd: [8700, 13300], local: [200000, 400000] },

    /* ================= Gynecology & Fertility ================= */
    ivf_icsi_fertility: { usd: [3000, 6000], local: [88000, 180000] },
    hysterectomy: { usd: [6700, 16700], local: [200000, 500000] },
    laparoscopic_gynec_surgery: { usd: [3300, 8300], local: [100000, 250000] },
    surrogacy_assistance: null,
    maternity_delivery_packages: { usd: [1700, 5000], local: [50000, 150000] },

    /* ================= Cosmetic & Plastic Surgery ================= */
    hair_transplant: { usd: [1000, 6700], local: [30000, 200000] },
    rhinoplasty: { usd: [3300, 10000], local: [100000, 300000] },
    liposuction: { usd: [2700, 6700], local: [80000, 200000] },
    tummy_tuck: { usd: [5000, 16700], local: [150000, 500000] },
    breast_augmentation: { usd: [3300, 10000], local: [100000, 300000] },

    /* ================= Ophthalmology (Eye Care) ================= */
    cataract_surgery: { usd: [670, 2300], local: [20000, 70000] },
    lasik_refractive: { usd: [1700, 4000], local: [50000, 120000] },
    retinal_surgery: { usd: [2700, 5000], local: [80000, 150000] },
    glaucoma_treatment: { usd: [830, 2000], local: [25000, 60000] },

    /* ================= ENT (Ear, Nose & Throat) ================= */
    cochlear_implant: { usd: [20000, 26700], local: [600000, 800000] },
    sinus_surgery: { usd: [5000, 10000], local: [150000, 300000] },
    tonsil_adenoid_removal: { usd: [1000, 3300], local: [30000, 100000] },
    ear_reconstruction: { usd: [5000, 13300], local: [150000, 400000] },

    /* ================= Dental & Oral Surgery ================= */
    dental_implants: { usd: [670, 3300], local: [20000, 100000] },
    full_mouth_rehabilitation: { usd: [10000, 20000], local: [300000, 600000] },
    smile_design: { usd: [3300, 10000], local: [100000, 300000] },
    root_canal_treatment: { usd: [500, 1300], local: [15000, 40000] },
    orthodontics: { usd: [1700, 5000], local: [50000, 150000] },

    /* ================= Ayurveda, Wellness & Rejuvenation ================= */
    ayurvedic_detox: null,
    stress_relief_mental_wellness: null,
    weight_management: null,
    yoga_naturopathy_packages: null
  }
};
