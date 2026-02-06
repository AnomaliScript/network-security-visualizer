# networkSecurityVisualizer

This project was made to be a "sandbox" in creating local networks in terms of cybersecurity to be a learning tool for my CyberPatriot Team.
The following is a mapping of what network devices can connect to which other network devices, which the sandbox is based off of.



## **Cybersecurity Network Device Connectivity Map (with Connection Types)**

---

### **1. Router**
**Can wire to:**
- Modem: **Ethernet (Cat5e/Cat6), Coax (for cable modems), Fiber (for fiber modems)**
- Switch: **Ethernet (Cat5e/Cat6/Cat6a)**
- Firewall: **Ethernet (Cat5e/Cat6)**
- Server: **Ethernet (Cat5e/Cat6/Cat6a), Fiber (SFP/SFP+ for high-speed)**
- Desktop: **Ethernet (Cat5e/Cat6)**
- Laptop: **Ethernet (Cat5e/Cat6)**
- Printer: **Ethernet (Cat5e/Cat6)**
- Access Point: **Ethernet (Cat5e/Cat6), PoE (Power over Ethernet)**
- The Internet (directly): **Ethernet (Direct ISP Handoff), Fiber (via SFP port)**

**Can wirelessly connect to:**
- Laptop: **Wi-Fi (802.11ac/Wi-Fi 5, 802.11ax/Wi-Fi 6, 802.11be/Wi-Fi 7)**
- Smartphone: **Wi-Fi (802.11ac/ax/be)**
- Tablet: **Wi-Fi (802.11ac/ax/be)**
- Printer: **Wi-Fi (802.11n/ac/ax)**
- Smart TV: **Wi-Fi (802.11ac/ax)**
- Security Camera: **Wi-Fi (802.11n/ac)**
- Smart Speaker: **Wi-Fi (802.11n/ac), Bluetooth (for setup/pairing)**

---

### **2. Switch**
**Can wire to:**
- Router: **Ethernet (Cat5e/Cat6/Cat6a), Fiber (SFP/SFP+)**
- Firewall: **Ethernet (Cat5e/Cat6), Fiber (SFP/SFP+)**
- Server: **Ethernet (Cat5e/Cat6/Cat6a), Fiber (SFP/SFP+ for 10Gbps+)**
- Desktop: **Ethernet (Cat5e/Cat6)**
- Laptop: **Ethernet (Cat5e/Cat6)**
- Printer: **Ethernet (Cat5e/Cat6)**
- Access Point: **Ethernet (Cat5e/Cat6), PoE**
- Another Switch: **Ethernet (Cat5e/Cat6/Cat6a), Fiber (for long-distance uplinks)**
- Security Camera: **Ethernet (Cat5e/Cat6), PoE**

**Can wirelessly connect to:**
- *Nothing* (switches are wired-only)

---

### **3. Access Point (AP)**
**Can wire to:**
- Router: **Ethernet (Cat5e/Cat6), PoE**
- Switch: **Ethernet (Cat5e/Cat6), PoE**
- Firewall: **Ethernet (Cat5e/Cat6)**

**Can wirelessly connect to:**
- Laptop: **Wi-Fi (802.11ac/ax/be)**
- Smartphone: **Wi-Fi (802.11ac/ax/be)**
- Tablet: **Wi-Fi (802.11ac/ax/be)**
- Printer: **Wi-Fi (802.11n/ac/ax)**
- Smart TV: **Wi-Fi (802.11ac/ax)**
- Security Camera: **Wi-Fi (802.11n/ac)**
- Smart Speaker: **Wi-Fi (802.11n/ac)**
- Desktop (with Wi-Fi adapter): **Wi-Fi (802.11ac/ax)**

---

### **4. Modem**
**Can wire to:**
- Router: **Ethernet (Cat5e/Cat6)**
- Modem/Router Combo: *N/A (they're alternatives)*
- Firewall: **Ethernet (Cat5e/Cat6)**
- Desktop (direct, rare): **Ethernet (Cat5e/Cat6)**
- The Internet (via ISP): **Coax (cable), Fiber (fiber optic), DSL (phone line)**

**Can wirelessly connect to:**
- *Nothing* (modems are wired-only)

---

### **5. Modem/Router Combo (Gateway)**
**Can wire to:**
- Switch: **Ethernet (Cat5e/Cat6)**
- Firewall: **Ethernet (Cat5e/Cat6)**
- Server: **Ethernet (Cat5e/Cat6)**
- Desktop: **Ethernet (Cat5e/Cat6)**
- Laptop: **Ethernet (Cat5e/Cat6)**
- Printer: **Ethernet (Cat5e/Cat6)**
- Access Point: **Ethernet (Cat5e/Cat6), PoE**
- The Internet: **Depends, refer to following table for what different kinds of gateways use to do this**

| Gateway Flavor | Input Port | Built-in "Power Up" |
|---|---|---|
| **Cable** | Coax (Copper) | DOCSIS Modem Chip |
| **DSL** | Phone Jack (RJ11) | DSL Modem Chip |
| **Fiber** | Fiber Optic | Internal ONT (Light-to-Digital) |
| **Cellular** | SIM / Internal Antenna | Cellular Modem (Radio-to-Digital) |
| **Satellite** | Proprietary Dish Port | Satellite Modem Hardware |

**Can wirelessly connect to:**
- Laptop: **Wi-Fi (802.11ac/ax/be)**
- Smartphone: **Wi-Fi (802.11ac/ax/be)**
- Tablet: **Wi-Fi (802.11ac/ax/be)**
- Printer: **Wi-Fi (802.11n/ac/ax)**
- Smart TV: **Wi-Fi (802.11ac/ax)**
- Security Camera: **Wi-Fi (802.11n/ac)**
- Smart Speaker: **Wi-Fi (802.11n/ac)**

---

### **6. Firewall**
**Can wire to:**
- Modem: **Ethernet (Cat5e/Cat6)**
- Router: **Ethernet (Cat5e/Cat6), Fiber (SFP/SFP+)**
- Switch: **Ethernet (Cat5e/Cat6/Cat6a), Fiber (SFP/SFP+)**
- Server: **Ethernet (Cat5e/Cat6)**
- Access Point: **Ethernet (Cat5e/Cat6)**
- The Internet (via modem/router): **Ethernet, Fiber**

**Can wirelessly connect to:**
- *Nothing* (firewalls are typically wired-only)

---

### **7. Server**
**Can wire to:**
- Router: **Ethernet (Cat5e/Cat6/Cat6a), Fiber (SFP/SFP+ for high-speed storage networks)**
- Switch: **Ethernet (Cat5e/Cat6/Cat6a), Fiber (SFP/SFP+, 10Gbps+)**
- Firewall: **Ethernet (Cat5e/Cat6)**
- Desktop: **Ethernet (Cat5e/Cat6)**
- Laptop: **Ethernet (Cat5e/Cat6)**
- Another Server: **Ethernet (Cat6/Cat6a), Fiber (for cluster/storage networks)**
- Printer: **Ethernet (Cat5e/Cat6)**

**Can wirelessly connect to:**
- Router (if Wi-Fi adapter): **Wi-Fi (802.11ac/ax)**
- Access Point (if Wi-Fi adapter): **Wi-Fi (802.11ac/ax)**

---

### **8. The Internet**
**Can wire to:**
- Modem: **Coax (cable ISP), Fiber (fiber ISP), DSL (phone line)**
- Router: **Ethernet (from modem)**
- Modem/Router Combo: **Coax, Fiber, DSL**
- Firewall: **Ethernet (from modem/router)**

**Can wirelessly connect to:**
- *Nothing directly* (accessed through devices)

---

### **9. Desktop Computer**
**Can wire to:**
- Router: **Ethernet (Cat5e/Cat6)**
- Switch: **Ethernet (Cat5e/Cat6)**
- Modem (rare): **Ethernet (Cat5e/Cat6)**
- Server: **Ethernet (Cat5e/Cat6)**
- Printer: **Ethernet (Cat5e/Cat6), USB**
- Another Desktop (rare): **Ethernet (crossover cable or switch)**

**Can wirelessly connect to:**
- Router (with Wi-Fi adapter): **Wi-Fi (802.11ac/ax), USB Wi-Fi dongle, PCIe Wi-Fi card**
- Access Point: **Wi-Fi (802.11ac/ax)**
- Printer: **Wi-Fi (802.11n/ac), Bluetooth (for some printers)**
- Smartphone (hotspot): **Wi-Fi (802.11ac/ax)**

---

### **10. Laptop**
**Can wire to:**
- Router: **Ethernet (Cat5e/Cat6), USB-C to Ethernet adapter**
- Switch: **Ethernet (Cat5e/Cat6)**
- Modem: **Ethernet (Cat5e/Cat6)**
- Server: **Ethernet (Cat5e/Cat6)**
- Printer: **Ethernet (Cat5e/Cat6), USB**

**Can wirelessly connect to:**
- Router: **Wi-Fi (802.11ac/ax/be)**
- Access Point: **Wi-Fi (802.11ac/ax/be)**
- Printer: **Wi-Fi (802.11n/ac), Bluetooth**
- Smartphone (hotspot): **Wi-Fi (802.11ac/ax)**
- Smart TV (casting): **Wi-Fi (802.11ac/ax), Miracast, AirPlay**

---

### **11. Smartphone**
**Can wire to:**
- Router (rare): **USB-C to Ethernet adapter**
- Desktop/Laptop: **USB-C, Lightning (for tethering)**

**Can wirelessly connect to:**
- Router: **Wi-Fi (802.11ac/ax/be), Cellular (4G LTE/5G to access Internet)**
- Access Point: **Wi-Fi (802.11ac/ax/be)**
- Printer: **Wi-Fi (802.11n/ac), Bluetooth**
- Smart TV: **Wi-Fi (Chromecast, AirPlay, Miracast)**
- Smart Speaker: **Wi-Fi, Bluetooth**
- Another Smartphone: **Wi-Fi Direct, Bluetooth, NFC (for pairing)**

---

### **12. Tablet**
**Can wire to:**
- Router (rare): **USB-C to Ethernet adapter**
- Desktop/Laptop: **USB-C, Lightning**

**Can wirelessly connect to:**
- Router: **Wi-Fi (802.11ac/ax/be)**
- Access Point: **Wi-Fi (802.11ac/ax/be)**
- Printer: **Wi-Fi (802.11n/ac), Bluetooth**
- Smart TV: **Wi-Fi (casting)**
- Smart Speaker: **Wi-Fi, Bluetooth**

---

### **13. Printer**
**Can wire to:**
- Router: **Ethernet (Cat5e/Cat6)**
- Switch: **Ethernet (Cat5e/Cat6)**
- Desktop: **Ethernet (Cat5e/Cat6), USB**
- Laptop: **Ethernet (Cat5e/Cat6), USB**
- Server: **Ethernet (Cat5e/Cat6)**

**Can wirelessly connect to:**
- Router: **Wi-Fi (802.11n/ac)**
- Access Point: **Wi-Fi (802.11n/ac)**
- Desktop: **Wi-Fi Direct, Bluetooth**
- Laptop: **Wi-Fi, Bluetooth**
- Smartphone: **Wi-Fi, Bluetooth, NFC (for tap-to-print)**
- Tablet: **Wi-Fi, Bluetooth**

---

### **14. Smart TV**
**Can wire to:**
- Router: **Ethernet (Cat5e/Cat6)**
- Switch: **Ethernet (Cat5e/Cat6)**

**Can wirelessly connect to:**
- Router: **Wi-Fi (802.11ac/ax)**
- Access Point: **Wi-Fi (802.11ac/ax)**
- Smartphone (casting): **Wi-Fi (Chromecast, AirPlay, Miracast)**
- Laptop (casting): **Wi-Fi (Chromecast, AirPlay, Miracast)**
- Tablet (casting): **Wi-Fi (Chromecast, AirPlay, Miracast)**

---

### **15. Security Camera (IP Camera)**
**Can wire to:**
- Router: **Ethernet (Cat5e/Cat6), PoE**
- Switch: **Ethernet (Cat5e/Cat6), PoE**
- Server (NVR): **Ethernet (Cat5e/Cat6)**

**Can wirelessly connect to:**
- Router: **Wi-Fi (802.11n/ac)**
- Access Point: **Wi-Fi (802.11n/ac)**

---

### **16. Smart Speaker**
**Can wire to:**
- Router (some models): **Ethernet (Cat5e/Cat6)**

**Can wirelessly connect to:**
- Router: **Wi-Fi (802.11n/ac)**
- Access Point: **Wi-Fi (802.11n/ac)**
- Smartphone (setup/control): **Bluetooth, Wi-Fi**
- Tablet (setup/control): **Bluetooth, Wi-Fi**

---

## **Connection Type Legend:**

### **Wired:**
- **Ethernet (Cat5e)**: Up to 1 Gbps, most common for home/small office
- **Ethernet (Cat6)**: Up to 10 Gbps (short distances), common for modern installations
- **Ethernet (Cat6a)**: Up to 10 Gbps (longer distances), used in enterprise
- **Fiber (SFP/SFP+)**: 1-100+ Gbps, used for high-speed server/datacenter connections
- **Coax**: Used by cable ISPs for Internet delivery
- **DSL (phone line)**: Used by DSL ISPs
- **PoE (Power over Ethernet)**: Delivers power + data over Ethernet (for APs, cameras)
- **USB/USB-C**: Direct device-to-device connections

### **Wireless:**
- **Wi-Fi 5 (802.11ac)**: Up to 3.5 Gbps, 5 GHz primarily
- **Wi-Fi 6 (802.11ax)**: Up to 9.6 Gbps, 2.4 GHz + 5 GHz + 6 GHz
- **Wi-Fi 7 (802.11be)**: Up to 46 Gbps, latest standard
- **Bluetooth**: Short-range (10-100m), for pairing/setup
- **Wi-Fi Direct**: Peer-to-peer Wi-Fi without router
- **NFC (Near Field Communication)**: Very short range (<4 cm), tap-to-connect
- **Cellular (4G LTE/5G)**: Mobile data connection to Internet

---

Does this level of detail work for you, or do you want me to simplify/expand anything?
### This mapping is subject to change
