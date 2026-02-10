# networkSecurityVisualizer

This project was made to be a "sandbox" in creating local networks in terms of cybersecurity to be a learning tool for my CyberPatriot Team.
The following is a mapping of what network devices can connect to which other network devices, which the sandbox is based off of.



## **Cybersecurity Network Device Connectivity Map (with Connection Types)**

---

Here is your final, architecturally accurate list of 16 devices. This mapping ensures that every connection follows the "True First Hop" logic required for a high-fidelity network visualization.

---

### 1. Router

**Can wire to:**

* Modem (Ethernet)
* Switch (Ethernet)
* Firewall (Ethernet)
* Server (Ethernet)
* Desktop (Ethernet)
* Laptop (Ethernet)
* Access Point (Ethernet)

**Can wirelessly connect to:**

* Nothing (Wireless is handled by the **Access Point**)

### 2. Switch

**Can wire to:**

* Router (Ethernet)
* Firewall (Ethernet)
* Server (Ethernet)
* Desktop (Ethernet)
* Laptop (Ethernet)
* Printer (Ethernet)
* Access Point (Ethernet/PoE)
* Another Switch (Ethernet/Fiber)

**Can wirelessly connect to:**

* Nothing (Wired-only)

### 3. Access Point (AP)

**Can wire to:**

* Switch (Ethernet/PoE)
* Router (Ethernet)
* Firewall (Ethernet)

**Can wirelessly connect to:**

* Laptop (Wi-Fi)
* Smartphone (Wi-Fi)
* Tablet (Wi-Fi)
* Printer (Wi-Fi)
* Desktop (Wi-Fi)
* Smart TV (Wi-Fi)
* Smart Speaker (Wi-Fi)

### 4. Modem

**Can wire to:**

* The Internet (Coax, Fiber, or DSL)
* Router (Ethernet)
* Firewall (Ethernet)

**Can wirelessly connect to:**

* Nothing (Wired-only)

### 5. Modem/Router Combo (Gateway)

**Can wire to:**

* The Internet (Coax, Fiber, or DSL)
* Switch (Ethernet)
* Server (Ethernet)
* Desktop (Ethernet)
* Printer (Ethernet)

**Can wirelessly connect to:**

* Laptop (Wi-Fi)
* Smartphone (Wi-Fi)
* Tablet (Wi-Fi)
* Cell Tower (Cellular - *if 5G/LTE Gateway flavor*)

### 6. Firewall

**Can wire to:**

* Modem (Ethernet)
* Router (Ethernet)
* Switch (Ethernet)
* Server (Ethernet)

**Can wirelessly connect to:**

* Nothing (Wired-only)

### 7. Server

**Can wire to:**

* Switch (Ethernet/Fiber)
* Router (Ethernet)
* Another Server (Ethernet/Fiber)

**Can wirelessly connect to:**

* Access Point (Wi-Fi)

### 8. The Internet

**Can wire to:**

* Modem (Coax/Fiber/DSL)
* Gateway (Coax/Fiber/DSL)

**Can wirelessly connect to:**

* Nothing directly (Accessed via **Cell Tower** or **Access Point**)

### 9. Desktop Computer

**Can wire to:**

* Switch (Ethernet)
* Router (Ethernet)
* Printer (USB/Ethernet)
* Server (Ethernet)

**Can wirelessly connect to:**

* Access Point (Wi-Fi)
* Smartphone (Wi-Fi - *Hotspot*)
* Printer (P2P - Bluetooth)

### 10. Laptop

**Can wire to:**

* Switch (Ethernet)
* Router (Ethernet)
* Printer (USB)
* Desktop/Tablet (USB-C)

**Can wirelessly connect to:**

* Access Point (Wi-Fi)
* Cell Tower (Cellular - *if SIM equipped*)
* Smartphone (Wi-Fi - *Hotspot*)
* Printer (P2P - Bluetooth)

### 11. Smartphone

**Can wire to:**

* Desktop/Laptop (USB/Lightning)
* Router (Ethernet - *via adapter*)

**Can wirelessly connect to:**

* Access Point (Wi-Fi)
* Cell Tower (Cellular)
* Another Smartphone (P2P - Bluetooth/NFC/Wi-Fi Direct)
* Printer (P2P - Bluetooth/Wi-Fi Direct)
* Smart Speaker (P2P - Bluetooth)

### 12. Tablet

**Can wire to:**

* Desktop/Laptop (USB-C/Lightning)
* Router (Ethernet - *via adapter*)

**Can wirelessly connect to:**

* Access Point (Wi-Fi)
* Cell Tower (Cellular)
* Smart Speaker (P2P - Bluetooth)
* Printer (P2P - Bluetooth/Wi-Fi Direct)

### 13. Printer

**Can wire to:**

* Switch (Ethernet)
* Desktop/Laptop (USB)
* Server (Ethernet)

**Can wirelessly connect to:**

* Access Point (Wi-Fi)
* Smartphone/Tablet/Laptop (P2P - Bluetooth/Wi-Fi Direct)

### 14. Cell Tower (Base Station)

**Can wire to:**

* Carrier Core (Fiber/Ethernet Backhaul)

**Can wirelessly connect to:**

* Smartphone (Cellular)
* Tablet (Cellular)
* Laptop (Cellular)
* Gateway (Cellular)
* Another Cell Tower (P2P - Microwave Link)

### 15. Carrier Core

**Can wire to:**

* Cell Tower (Fiber)
* The Internet (Fiber)
* Landline (Fiber/Copper Gateway)
* Other Carrier Cores (Fiber)

**Can wirelessly connect to:**

* Nothing (Wired backend infrastructure)

### 16. Landline

**Can wire to:**

* Carrier Core (via Media Gateway)
* Another Landline (Copper circuit)
* Router (Ethernet - *via VoIP adapter*)

**Can wirelessly connect to:**

* Nothing (Wired-only)

---

Does this level of detail work for you, or do you want me to simplify/expand anything?
### This mapping is subject to change
